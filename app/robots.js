const siteUrl = "https://muibi-portfolio.vercel.app"; // TODO: replace with your real domain once you have one

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
