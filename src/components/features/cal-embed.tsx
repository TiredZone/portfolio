"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function CalEmbed() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
                theme: "auto",
                styles: {
                    branding: {
                        brandColor: "#D97706", // Gold brand color to match your theme
                    },
                },
                cssVarsPerTheme: {
                    light: {
                        "cal-border-emphasis": "transparent",
                        "cal-border": "#e5e5e5",
                        "cal-bg": "#ffffff",
                        "cal-bg-muted": "#f8fafc",
                    },
                    dark: {
                        "cal-border-emphasis": "transparent",
                        "cal-border": "#374151",
                        "cal-bg": "#1f2937",
                        "cal-bg-muted": "#111827",
                    },
                },
            });

            // Track when user successfully books
            cal("on", {
                action: "bookingSuccessful",
                callback: () => {
                    if (typeof window !== "undefined") {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const dataLayer = (window as Record<string, any>)
                            .dataLayer;
                        if (dataLayer) {
                            dataLayer.push({
                                event: "booking_initiated",
                                value: 500,
                                currency: "USD",
                            });
                        }
                    }
                },
            });
        })();
    }, []);

    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-royal-200/50 dark:border-royal-800/50 bg-white dark:bg-royal-950 transition-all duration-300">
            <Cal
                namespace="30min"
                calLink="becharaelmaalouf/strategy-call"
                style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "600px",
                    maxWidth: "100%",
                    overflow: "hidden",
                }}
                config={{
                    layout: "month_view",
                    theme: "auto",
                }}
            />
        </div>
    );
}
