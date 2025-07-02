import { connectToDatabase } from "@/lib/mongodb";
import Service from "@/models/Service";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  await connectToDatabase();
  const { slug } = params;
  const service = await Service.findOne({ slug });
  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }
  return NextResponse.json(service);
}
