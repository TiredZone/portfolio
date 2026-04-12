"use client";

import { useEffect } from "react";

export function HashScroll() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        function scrollToHash() {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }

        // Scroll multiple times to fight layout shifts from async embeds (Cal.com)
        const delays = [150, 600, 1200];
        const timers = delays.map((delay) => setTimeout(scrollToHash, delay));

        return () => timers.forEach(clearTimeout);
    }, []);

    return null;
}
