export default defineEventHandler(async (event) => {
  // perform async logic

  const config = useRuntimeConfig(event);

  const domains = config.public.PUBLIC_URL;

  const routes: string[] = [
    "/",
    "/faq",
    "/index",
    "/contact",
    "/blog",
    "/onze-locaties",
    "/onze-vacatures",
    "/werkstek-community",
    "/privacy-verklaring",
    "/voor-verhuurders",
    "/over-werkstek",
  ];

  // copy the logic from the module above though you might consider,
  // if relevant, using your CMS's modified date for <lastmod> instead
  const timestamp = new Date().toISOString();
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) =>
      [
        "<url>",
        `  <loc>${"https://werkstek.nl" + route}</loc>`,
        `  <lastmod>${timestamp}</lastmod>`,
        "</url>",
      ].join("")
    ),
    "</urlset>",
  ].join("");

  setHeader(event, "content-type", "application/xml");
  return sitemap;
});
