"use client";

import { useEffect } from "react";

export function HashScroll() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        // Wait for next frame to ensure DOM is settled after hydration
        requestAnimationFrame(() => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }, []);

    return null;
}
