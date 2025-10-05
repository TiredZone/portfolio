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
                    },
                    dark: {
                        "cal-border-emphasis": "transparent",
                        "cal-border": "#374151",
                    },
                },
            });
        })();
    }, []);

    return (
        <div className="w-full rounded-lg overflow-hidden shadow-xl border border-royal-200 dark:border-royal-800 bg-white dark:bg-royal-950">
            <Cal
                namespace="30min"
                calLink="becharaelmaalouf/strategy-call"
                style={{
                    width: "100%",
                    height: "700px",
                    minHeight: "700px",
                    maxHeight: "700px",
                    minWidth: "100%",
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
