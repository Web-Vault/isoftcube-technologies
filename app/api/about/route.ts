import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import AboutPage from '@/models/AboutPage';

export async function GET() {
  try {
    await connectToDatabase();
    const about = await AboutPage.findOne();
    if (!about) {
      return NextResponse.json({ error: 'About page not found' }, { status: 404 });
    }
    return NextResponse.json(about);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch about page' }, { status: 500 });
  }
} 