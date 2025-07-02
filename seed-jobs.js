import mongoose from "mongoose";
import Job from "./models/Job.js";
import { jobs } from "./job-data.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Job.deleteMany({});
    await Job.insertMany(jobs);
    console.log("Jobs seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
