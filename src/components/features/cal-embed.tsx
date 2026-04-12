"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface CalEmbedProps {
    defer?: boolean;
}

export function CalEmbed({ defer = false }: CalEmbedProps) {
    const [show, setShow] = useState(!defer);

    useEffect(() => {
        if (!defer) return;
        // Wait for scroll to settle, then render Cal
        const timer = setTimeout(() => setShow(true), 800);
        return () => clearTimeout(timer);
    }, [defer]);

    useEffect(() => {
        if (!show) return;
        (async function () {
            const cal = await getCalApi({ namespace: "30min" });
            cal("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
                theme: "auto",
                styles: {
                    branding: {
                        brandColor: "#D97706",
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
    }, [show]);

    return (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-royal-200/50 dark:border-royal-800/50 bg-white dark:bg-royal-950 transition-all duration-300">
            {show ? (
                <Cal
                    namespace="30min"
                    calLink="becharaelmaalouf/strategy-call"
                    style={{
                        width: "100%",
                        height: "100%",
                        overflow: "scroll",
                    }}
                    config={{
                        layout: "month_view",
                        theme: "auto",
                    }}
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-royal-400 animate-spin" />
                </div>
            )}
        </div>
    );
}
