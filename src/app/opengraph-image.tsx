import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Neat Touch Auto Spa — Mobile Auto Detailing in the Chicago Suburbs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(circle at 25% 25%, #1a1a1a 0%, #000000 60%)",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 6,
            background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          }}
        />
        <div
          style={{
            color: "#C9A84C",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Chicago Suburbs · Illinois
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 76,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Neat Touch Auto Spa
        </div>
        <div
          style={{
            color: "#9ca3af",
            fontSize: 38,
            textAlign: "center",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          Premium Mobile Auto Detailing — We Come To You
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 44,
            color: "#E0C47A",
            fontSize: 28,
          }}
        >
          ★★★★★ &nbsp; 4.9 Rated
        </div>
      </div>
    ),
    size
  );
}
