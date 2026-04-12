"use client";

import { useEffect } from "react";

export function HashScroll() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        // Small delay to ensure the target element is rendered
        const timer = setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
