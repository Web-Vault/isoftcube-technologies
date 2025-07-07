import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    // Get the original filename (if available)
    const fileName = (file as File & { name?: string }).name || `${Date.now()}.pdf`;
    // Sanitize filename for Cloudinary
    const safeFileName = fileName.replace(/[^a-zA-Z0-9_.-]/g, '_');
    const publicId = `resumes/${safeFileName.replace(/\.pdf$/i, '')}`;
    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    // Upload to Cloudinary as raw (for PDF)
    const uploadResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: "raw", public_id: publicId }, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }).end(buffer);
    });
    return NextResponse.json({ url: uploadResult.secure_url }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
} 