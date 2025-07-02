const mongoose = require("mongoose");
const Service = require("./models/Service").default;
require("dotenv").config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

const services = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "We build modern web applications.",
    content: "Full page content for web development...",
    icon: "web",
    image: "https://example.com/web.png",
  },
  {
    name: "Mobile App Development",
    slug: "mobile-app-development",
    description: "We build mobile apps.",
    content: "Full page content for mobile apps...",
    icon: "mobile",
    image: "https://example.com/mobile.png",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    await Service.deleteMany({});
    await Service.insertMany(services);
    console.log("Database seeded!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
