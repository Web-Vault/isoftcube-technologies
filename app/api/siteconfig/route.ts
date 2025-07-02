import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import SiteConfig from '@/models/SiteConfig';

export async function GET() {
  try {
    await connectToDatabase();
    const config = await SiteConfig.findOne();
    if (!config) {
      return NextResponse.json({ error: 'Site config not found' }, { status: 404 });
    }
    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch site config' }, { status: 500 });
  }
} 