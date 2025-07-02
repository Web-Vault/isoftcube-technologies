import mongoose from "mongoose";
import Service from "./models/Service.js";
import { services } from "./services-data.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log("Services seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed(); 