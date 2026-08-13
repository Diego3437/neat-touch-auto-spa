import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050505 0%, #1a1a1a 100%)",
          color: "#C9A84C",
          fontSize: 150,
          fontWeight: 900,
          letterSpacing: -8,
          border: "26px solid #C9A84C",
          borderRadius: 120,
        }}
      >
        NT
      </div>
    ),
    size
  );
}
