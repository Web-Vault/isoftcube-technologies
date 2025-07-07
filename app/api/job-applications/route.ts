import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import JobApplication from "@/models/JobApplication";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const data = await req.json();
    console.log('Received data:', data);
    // Validate required fields
    const { name, email, phone, experience, coverLetter, resumeUrl, jobId } = data;
    if (!name || !email || !jobId) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    const application = await JobApplication.create({
      name,
      email,
      phone,
      experience,
      coverLetter,
      resumeUrl,
      jobId,
    });
    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Server error" }, { status: 500 });
  }
} 