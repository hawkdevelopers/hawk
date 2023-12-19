module.exports = {
  siteUrl: "https://ordinalstorage.tech",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://ordinalstorage.tech/server-sitemap.xml"],
  },
};
