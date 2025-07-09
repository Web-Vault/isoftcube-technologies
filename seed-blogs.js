import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import dotenv from 'dotenv';
import { blogData } from './blog-data.js';

dotenv.config({ path: '.env.local' });

const MONGODB_URI = process.env.MONGODB_URI;

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Blog.deleteMany({});
    await Blog.insertMany(blogData);
    console.log('Blog data seeded!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedBlogs(); 