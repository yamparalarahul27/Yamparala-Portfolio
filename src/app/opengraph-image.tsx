import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yamparala Rahul - Design Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0A",
          position: "relative",
        }}
      >
        {/* Dot grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexWrap: "wrap",
            opacity: 0.15,
          }}
        >
          {Array.from({ length: 40 * 21 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: 30,
                height: 30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 2,
                  height: 2,
                  borderRadius: "50%",
                  backgroundColor: "#9CA3AF",
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "#9CA3AF",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            Yamparala Rahul
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#F1F1F1",
              letterSpacing: "-0.04em",
              fontFamily: "sans-serif",
            }}
          >
            Design Engineer
          </span>
          <span
            style={{
              fontSize: 20,
              color: "#6B7280",
              fontFamily: "sans-serif",
            }}
          >
            hirahul.xyz
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
