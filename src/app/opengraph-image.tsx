import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Riskaa Oktafiani Portofolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
          background: "#0b5cff",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: 800,
          }}
        >
          Riskaa Oktafiani
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
          }}
        >
          Website Profil & Portofolio
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          Siswi Rekayasa Perangkat Lunak
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}