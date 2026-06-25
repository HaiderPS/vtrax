import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VTRAX – Retaining Wall Specialists in Wollongong & South Coast NSW";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Yellow top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#F7AC1D",
            display: "flex",
          }}
        />

        {/* Decorative circle */}
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(247,172,29,0.06)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 120,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(247,172,29,0.03)",
            display: "flex",
          }}
        />

        {/* Top-right contact info */}
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 6,
          }}
        >
          <div
            style={{
              color: "#F7AC1D",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 1,
              display: "flex",
            }}
          >
            0478 563 679
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.38)",
              fontSize: 15,
              display: "flex",
            }}
          >
            vtraxprojects.com.au
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            height: "100%",
            padding: "80px 80px 68px 80px",
          }}
        >
          {/* Category tag */}
          <div
            style={{
              display: "flex",
              marginBottom: 18,
            }}
          >
            <div
              style={{
                color: "#F7AC1D",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 5,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              RETAINING WALL SPECIALISTS · NSW AUSTRALIA
            </div>
          </div>

          {/* Brand name */}
          <div style={{ display: "flex", marginBottom: 20 }}>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: 108,
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: -3,
                display: "flex",
              }}
            >
              VTRAX
            </div>
          </div>

          {/* Tagline */}
          <div style={{ display: "flex", marginBottom: 44 }}>
            <div
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: 26,
                fontWeight: 400,
                lineHeight: 1.45,
                maxWidth: 660,
                display: "flex",
              }}
            >
              Concrete, Block & Timber Retaining Walls across Wollongong & South Coast NSW
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "8+", label: "Years Experience" },
              { value: "60+", label: "Walls Completed" },
              { value: "$0", label: "Assessment Fee" },
            ].map((stat) => (
              <div
                key={stat.value}
                style={{ display: "flex", flexDirection: "column", gap: 4 }}
              >
                <div
                  style={{
                    color: "#F7AC1D",
                    fontSize: 40,
                    fontWeight: 800,
                    display: "flex",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 13,
                    letterSpacing: 1,
                    display: "flex",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
