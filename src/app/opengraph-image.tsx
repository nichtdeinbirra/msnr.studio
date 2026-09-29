import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

export const alt = `${site.owner}: ${site.positioning}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0C0C0C",
          color: "#F2F2F2",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -2 }}>
          {site.name}
          <span style={{ color: "#648BFF" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.1, letterSpacing: -2 }}>
          <span>{site.hero.headline.start}</span>
          <span style={{ color: "#C6F432" }}>{site.hero.headline.highlight}</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#8F8F8F" }}>{site.owner} · Offenbach am Main</div>
      </div>
    ),
    size,
  );
}
