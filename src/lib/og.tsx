import { ImageResponse } from "next/og";

type OgProps = { eyebrow: string; title: string; subtitle?: string };

export function renderOg({ eyebrow, title, subtitle }: OgProps) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#08080a",
                    color: "#ededef",
                    padding: 72,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a1a1aa" }}>
                    <div
                        style={{
                            display: "flex",
                            width: 56,
                            height: 56,
                            alignItems: "center",
                            justifyContent: "center",
                            border: "2px solid rgba(255,255,255,0.16)",
                            borderRadius: 12,
                            color: "#ededef",
                            fontSize: 26,
                        }}
                    >
                        MK
                    </div>
                    {eyebrow}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <div
                        style={{
                            display: "flex",
                            fontSize: title.length > 48 ? 64 : 80,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                            maxWidth: 1000,
                        }}
                    >
                        {title}
                    </div>
                    {subtitle && <div style={{ display: "flex", fontSize: 28, color: "#6c7bff" }}>{subtitle}</div>}
                </div>
            </div>
        ),
        { width: 1200, height: 630 },
    );
}