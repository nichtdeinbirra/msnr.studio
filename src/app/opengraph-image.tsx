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
          padding: 64,
          background: "#F1EDE4",
          color: "#111111",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, borderBottom: "4px solid #111", paddingBottom: 16 }}>
          <span>{site.name}. präsentiert</span>
          <span>Offenbach am Main</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
          {site.hero.lines.map((line) => (
            <div key={line.text} style={{ display: "flex" }}>
              <span style={"highlight" in line ? { background: "#C6F432", padding: "0 12px", margin: "0 -12px" } : {}}>
                {line.text.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#5C5A57" }}>{site.positioning}</div>
      </div>
    ),
    size,
  );
}
