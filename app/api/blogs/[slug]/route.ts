import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Blog from '../../../../models/Blog.js';
import { connectToDatabase } from '../../../../lib/mongodb';

interface Params {
  slug: string;
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
  try {
    await connectToDatabase();
    const { slug } = params;
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 