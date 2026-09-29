import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const dynamic = "force-static";

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
          background: "#F5F2EC",
          color: "#17171B",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#66656B", letterSpacing: 2,  }}>
          {site.positioning}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, fontWeight: 800, letterSpacing: -8, lineHeight: 1 }}>
            {site.name}
            <span style={{ color: "#3D63F0" }}>.</span>
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 40, color: "#66656B" }}>{site.hero.greeting}</div>
        </div>
      </div>
    ),
    size,
  );
}
