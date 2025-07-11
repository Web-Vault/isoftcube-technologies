/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://isoftcube-technologies.onrender.com/', // Change to your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Optional: split sitemaps if you have many URLs
  changefreq: 'weekly', // Default change frequency
  priority: 0.7, // Default priority
  exclude: ['/admin', '/secret-page'], // Optional: exclude specific routes
  // Optionally, you can add more advanced config here
};

export default config;
