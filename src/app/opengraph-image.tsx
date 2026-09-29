import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}. — ${site.positioning}`;
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
          background: "#0A0B10",
          color: "#F8F9FF",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#989EB2", letterSpacing: 2, textTransform: "uppercase" }}>
          {site.positioning}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 800, letterSpacing: -8, lineHeight: 1 }}>
            {site.name}
            <span style={{ color: "#648BFF" }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 40, color: "#989EB2" }}>{site.hero.headline}</div>
        </div>
      </div>
    ),
    size,
  );
}
