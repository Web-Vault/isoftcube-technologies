import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from "@/lib/mongodb";
import ContactSubmission from '@/models/ContactSubmission.js'

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase()
    const body = await req.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    const submission = await ContactSubmission.create({
      name,
      email,
      company,
      service,
      message,
    })

    return NextResponse.json({ success: true, submission }, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Something went wrong.' }, { status: 500 })
  }
} 