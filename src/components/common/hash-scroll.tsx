"use client";

import { useEffect } from "react";

export function HashScroll() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const timer = setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
