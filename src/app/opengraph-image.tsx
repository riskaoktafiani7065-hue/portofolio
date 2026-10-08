
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Riskaa Oktafiani - Portofolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const photoUrl = new URL(
    "/fotokuu.jpeg",
    "https://www.riska-oktafiani.my.id"
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #eef6ff 0%, #d9eaff 55%, #e8f7ff 100%)",
          fontFamily: "Arial, sans-serif",
          color: "#102a56",
          padding: "55px 65px",
        }}
      >
        {/* Dekorasi biru */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: 250,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "#c4dcff",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -190,
            left: -100,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "#b9eaff",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 30,
            bottom: -100,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "#d4d7ff",
            display: "flex",
          }}
        />

        {/* Konten teks */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 690,
            zIndex: 2,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 23,
              fontWeight: 700,
              color: "#2878ed",
              marginBottom: 25,
            }}
          >
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: "50%",
                background: "#20c7e8",
                display: "flex",
              }}
            />
            MY PORTOFOLIO
          </div>

          {/* Nama */}
          <div
            style={{
              display: "flex",
              fontSize: 57,
              fontWeight: 800,
              letterSpacing: "-1.8px",
              lineHeight: 1.15,
              marginBottom: 16,
              color: "#102a56",
            }}
          >
            Riskaa Oktafiani
          </div>

          {/* Profesi */}
          <div
            style={{
              display: "flex",
              fontSize: 29,
              fontWeight: 700,
              color: "#2878ed",
              marginBottom: 27,
            }}
          >
            Full Stack Web Developer
          </div>

          {/* Garis aksen dan sekolah */}
          <div
            style={{
              display: "flex",
              borderLeft: "5px solid #22c5e8",
              paddingLeft: 17,
              flexDirection: "column",
              fontSize: 21,
              lineHeight: 1.6,
              color: "#506b91",
            }}
          >
            <span>Siswi Rekayasa Perangkat Lunak</span>
            <span style={{ color: "#2878ed", fontWeight: 700 }}>
              SMKN 1 Pasuruan
            </span>
          </div>

          {/* Domain */}
          <div
            style={{
              display: "flex",
              marginTop: 34,
              fontSize: 19,
              color: "#2878ed",
              fontWeight: 700,
            }}
          >
            www.riska-oktafiani.my.id
          </div>
        </div>

        {/* Bingkai foto lingkaran */}
        <div
          style={{
            position: "absolute",
            right: 65,
            top: 120,
            width: 390,
            height: 390,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #25c9ed, #3983ff, #8a8bff)",
            padding: 9,
            display: "flex",
            boxShadow: "0 15px 45px rgba(40,120,237,0.28)",
            zIndex: 2,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              border: "5px solid white",
              display: "flex",
              background: "#d8e9ff",
            }}
          >
            {/* Foto profil */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl.toString()}
              width="372"
              height="372"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        {/* Aksen kecil */}
        <div
          style={{
            position: "absolute",
            right: 465,
            top: 85,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#20c7e8",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 75,
            bottom: 75,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#818cf8",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
