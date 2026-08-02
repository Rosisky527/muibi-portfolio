const siteUrl = "https://example.com"; // TODO: replace with your real domain once you have one

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
