"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { CalEmbed } from "./cal-embed";

export function DeferredCalEmbed() {
    const searchParams = useSearchParams();
    const scrollTarget = searchParams.get("scrollTo");
    const shouldDefer = !!scrollTarget;

    const handleCalReady = useCallback(() => {
        // Save current scroll position BEFORE Cal.com hijacks it
        const savedY = window.scrollY;

        // Block all scroll attempts for the next 2 seconds
        const blockScroll = () => window.scrollTo({ top: savedY, behavior: "instant" });

        window.addEventListener("scroll", blockScroll);

        // Release after 2 seconds
        setTimeout(() => {
            window.removeEventListener("scroll", blockScroll);
        }, 2000);
    }, []);

    return <CalEmbed defer={shouldDefer} onReady={handleCalReady} />;
}
