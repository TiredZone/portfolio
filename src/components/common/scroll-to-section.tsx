"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollToSection() {
    const searchParams = useSearchParams();
    const scrollTo = searchParams.get("scrollTo");

    useEffect(() => {
        if (!scrollTo) return;

        const targetId = scrollTo === "form" ? "contact-form" : scrollTo === "booking" ? "booking" : null;
        if (!targetId) return;

        const doScroll = () => {
            const el = document.getElementById(targetId);
            if (!el) return;
            const navbarHeight = 80;
            const y = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({ top: y, behavior: "instant" });
        };

        // Wait for page to be fully loaded (including Cal.com iframe)
        if (document.readyState === "complete") {
            doScroll();
        } else {
            window.addEventListener("load", doScroll);
            return () => window.removeEventListener("load", doScroll);
        }
    }, [scrollTo]);

    return null;
}
