import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileUrl = searchParams.get("url");
  if (!fileUrl) {
    return new Response("Missing url parameter", { status: 400 });
  }
  try {
    const response = await fetch(fileUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    if (!response.ok) {
      return new Response("Failed to fetch file", { status: 502 });
    }
    const filename = fileUrl.split("/").pop() || "resume.pdf";
    const headers = new Headers(response.headers);
    headers.set("Content-Disposition", `attachment; filename=\"${filename}\"`);
    headers.set("Content-Type", "application/pdf");
    return new Response(response.body, {
      status: 200,
      headers,
    });
  } catch (error: any) {
    return new Response("Server error: " + error.message, { status: 500 });
  }
} 