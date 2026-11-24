import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vikblomstad.se";

  const routes = [
    "",
    "/about",
    "/contact",
    "/gallery",
    "/price",
    "/work",
    "/services",
    "/services/airbnb",
    "/services/byggstad",
    "/services/flyttstad",
    "/services/fonsterputs",
    "/services/hemstad",
    "/services/kontorstad",
    "/services/storstad",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}