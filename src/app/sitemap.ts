import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {const base="https://www.spacedesign.co.in";return ["","about","services","projects","manufacturing","careers","contact"].map(path=>({url:path?`${base}/${path}`:base,lastModified:new Date("2026-11-02")}));}
