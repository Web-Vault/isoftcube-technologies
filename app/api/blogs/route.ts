import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Blog from '../../../models/Blog.js';
import { connectToDatabase } from '../../../lib/mongodb';

export async function GET() {
  try {
    await connectToDatabase();
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 