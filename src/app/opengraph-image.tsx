import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Bechara El Maalouf — Full-Stack Developer";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background:
                        "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "system-ui",
                    padding: "60px",
                    position: "relative",
                }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "8px",
                        background: "#ffc23d",
                    }}
                />

                {/* Main content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        gap: "20px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: 72,
                            fontWeight: 700,
                            margin: 0,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        Bechara El Maalouf
                    </h1>

                    <div
                        style={{
                            fontSize: 42,
                            fontWeight: 400,
                            color: "#ffc23d",
                            margin: 0,
                        }}
                    >
                        Full‑Stack Developer
                    </div>

                    <p
                        style={{
                            fontSize: 28,
                            fontWeight: 300,
                            color: "#e0e7ff",
                            margin: 0,
                            maxWidth: "900px",
                            lineHeight: 1.4,
                        }}
                    >
                        Building scalable web, mobile, and automation systems
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            fontSize: 24,
                            color: "#c7d2fe",
                            marginTop: "20px",
                        }}
                    >
                        <span>React</span>
                        <span>•</span>
                        <span>Node.js</span>
                        <span>•</span>
                        <span>.NET</span>
                        <span>•</span>
                        <span>Shopify</span>
                        <span>•</span>
                        <span>AI</span>
                    </div>
                </div>

                {/* URL at bottom */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        fontSize: 24,
                        color: "#c7d2fe",
                    }}
                >
                    becharaelmaalouf.dev
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
