import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const jobs = await Job.find();
  return NextResponse.json(jobs);
}
