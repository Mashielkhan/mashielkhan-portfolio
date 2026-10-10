import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
                    background: "#08080a",
                    color: "#8591ff",
                    fontSize: 17,
                    fontWeight: 700,
                    borderRadius: 7,
                }}
            >
                MK
            </div>
        ),
        { ...size },
    );
}