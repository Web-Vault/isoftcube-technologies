import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

// Use a module-scoped variable instead of global
let cachedConn: Mongoose | null = null;
let cachedPromise: Promise<Mongoose> | null = null;

export async function connectToDatabase(): Promise<Mongoose> {
  if (cachedConn) {
    return cachedConn;
  }
  if (!cachedPromise) {
    cachedPromise = mongoose.connect(MONGODB_URI);
  }
  cachedConn = await cachedPromise;
  return cachedConn;
}
