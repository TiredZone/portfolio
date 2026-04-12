"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollToSection() {
    const searchParams = useSearchParams();
    const scrollTo = searchParams.get("scrollTo");
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!scrollTo) return;

        const targetId = scrollTo === "form" ? "contact-form" : scrollTo === "booking" ? "booking" : null;
        if (!targetId) return;

        const navbarHeight = 80;

        const doScroll = () => {
            const el = document.getElementById(targetId);
            if (!el) return;
            const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            // Only scroll if position actually changed (avoid unnecessary jumps)
            if (Math.abs(y - lastScrollY.current) > 5) {
                lastScrollY.current = y;
                window.scrollTo({ top: y, behavior: "instant" });
            }
        };

        // Watch the booking section for size changes (Cal.com iframe loading)
        const bookingEl = document.getElementById("booking");
        let observer: ResizeObserver | null = null;

        if (bookingEl) {
            observer = new ResizeObserver(() => {
                doScroll();
            });
            observer.observe(bookingEl);
        }

        // Initial scroll
        doScroll();

        // Stop observing after 5 seconds (Cal.com should be done by then)
        const cleanup = setTimeout(() => {
            observer?.disconnect();
        }, 5000);

        return () => {
            observer?.disconnect();
            clearTimeout(cleanup);
        };
    }, [scrollTo]);

    return null;
}
