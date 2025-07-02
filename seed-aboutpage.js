import mongoose from "mongoose";
import AboutPage from "./models/AboutPage.js";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

async function seedAboutPage() {
  await mongoose.connect(MONGODB_URI);
  await AboutPage.deleteMany({});

  const aboutPage = new AboutPage({
    sections: [
      {
        title: "Our Mission",
        content:
          "To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We believe in making complex technology accessible and beneficial for organizations of all sizes.",
      },
      {
        title: "Our Vision",
        content:
          "To be the leading technology partner that businesses trust for their digital transformation journey. We envision a future where technology seamlessly integrates with business processes to create unprecedented value.",
      },
    ],
    ourVision: [], // Not used in this version, see below for values
    ourValues: [
      {
        title: "Innovation",
        content:
          "We stay at the forefront of technology, constantly exploring new solutions and approaches to solve complex challenges.",
      },
      {
        title: "Excellence",
        content:
          "We deliver high-quality solutions that exceed expectations and provide long-term value to our clients.",
      },
      {
        title: "Partnership",
        content:
          "We build lasting relationships with our clients, working as trusted partners in their success journey.",
      },
    ],
    valuesSubheading: "The principles that guide everything we do",
    teamSubheading: "The talented individuals behind our success",
    teamMembers: [ 
      {
        name: "John Smith",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in technology and business strategy.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Sarah Johnson",
        role: "CTO",
        bio: "Technical expert specializing in cloud architecture and AI solutions.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Mike Chen",
        role: "Head of Development",
        bio: "Full-stack developer with expertise in modern web technologies.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Emily Davis",
        role: "Head of Design",
        bio: "Creative designer focused on user experience and interface design.",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  });

  await aboutPage.save();
  console.log("AboutPage seeded!");
  mongoose.connection.close();
}

seedAboutPage().catch((err) => {
  console.error(err);
  mongoose.connection.close();
}); 