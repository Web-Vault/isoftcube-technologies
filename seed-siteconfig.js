import mongoose from 'mongoose';
import SiteConfig from './models/SiteConfig.js';
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI;

async function seedSiteConfig() {
  await mongoose.connect(MONGODB_URI);
  await SiteConfig.deleteMany({});

  const config = new SiteConfig({
    siteName: 'iSoftcube Technologies',
    logoUrl: '/favicon-96x96-1.png',
    faviconUrl: '/favicon-96x96-1.png',
    contactEmails: ['info@isoftcubetechnologies.com'],
    contactPhones: ['+91 99988 33373'],
    contactAddress: '717 Shivalik Satyamev, Nr. Valik Saheb OverBridge, S.P. Ring Road, Bopal, Ahmedabad - 380058',
    socialLinks: {
      facebook: 'https://facebook.com/isoftcube',
      twitter: 'https://twitter.com/isoftcube',
      linkedin: 'https://linkedin.com/company/isoftcube',
      Instagram: 'https://instagram.com/isoftcube',
    },
  });

  await config.save();
  console.log('SiteConfig seeded!');
  mongoose.connection.close();
}

seedSiteConfig().catch((err) => {
  console.error(err);
  mongoose.connection.close();
}); 