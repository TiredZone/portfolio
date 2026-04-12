"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function HashScroll() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const scrollToTarget = () => {
            const el = document.querySelector(hash);
            if (!el) return;

            const navbarHeight = 80;
            const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top, behavior: "instant" });
        };

        // Override Next.js scroll-to-top: scroll instantly after a short delay
        // Using "instant" so there's no visible animation fighting
        const t1 = setTimeout(scrollToTarget, 0);
        const t2 = setTimeout(scrollToTarget, 100);
        const t3 = setTimeout(scrollToTarget, 300);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    // Re-run when search params change (new navigation to same page with different params)
    }, [searchParams]);

    return null;
}
