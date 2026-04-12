"use client";

import { useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { CalEmbed } from "./cal-embed";

export function DeferredCalEmbed() {
    const searchParams = useSearchParams();
    const scrollTarget = searchParams.get("scrollTo");
    const shouldDefer = !!scrollTarget;

    const handleCalReady = useCallback(() => {
        if (!scrollTarget) return;

        const targetId = scrollTarget === "form" ? "contact-form" : scrollTarget === "booking" ? "booking" : null;
        if (!targetId) return;

        // Cal.com hijacks scroll on init — fight back after a short delay
        const resnap = () => {
            const el = document.getElementById(targetId);
            if (!el) return;
            const navbarHeight = 80;
            const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: y, behavior: "instant" });
        };

        // Re-scroll multiple times to beat Cal.com's scroll hijack
        setTimeout(resnap, 50);
        setTimeout(resnap, 200);
        setTimeout(resnap, 500);
        setTimeout(resnap, 1000);
    }, [scrollTarget]);

    return <CalEmbed defer={shouldDefer} onReady={handleCalReady} />;
}
