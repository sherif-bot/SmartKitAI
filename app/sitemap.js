
export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://smartkit-ai.vercel.app";

  const routes = [
    "",
    "/outils/assistant",
    "/formations/intelligence-artificielle",
    "/connexion",
    "/legal/mentions-legales"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
