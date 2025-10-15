"use client";

import { useEffect } from "react";

interface CaseStudyTrackerProps {
    title: string;
}

export function CaseStudyTracker({ title }: CaseStudyTrackerProps) {
    useEffect(() => {
        // Track case study view on component mount
        if (typeof window !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dataLayer = (window as Record<string, any>).dataLayer;
            if (dataLayer) {
                dataLayer.push({
                    event: "case_study_view",
                    case_study_name: title,
                    value: 10,
                    currency: "USD",
                });
            }
        }
    }, [title]);

    return null; // This component doesn't render anything
}
