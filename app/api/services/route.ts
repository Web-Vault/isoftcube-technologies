import { connectToDatabase } from '@/lib/mongodb';
import Service from '@/models/Service';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const services = await Service.find();
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services.' }, { status: 500 });
  }
} 