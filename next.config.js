/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: "https://ordinalstorage.tech",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://ordinalstorage.tech/server-sitemap.xml"],
  },
};

module.exports = nextConfig;
