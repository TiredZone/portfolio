"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface ResumeDownloadButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export function ResumeDownloadButton({
    className,
    children,
}: ResumeDownloadButtonProps) {
    return (
        <Button
            size="lg"
            variant="outline"
            className={className}
            asChild
        >
            <a
                href="/bechara-el-maalouf-resume.pdf"
                download
                onClick={() => {
                    if (typeof window !== "undefined") {
                        const dataLayer = (
                            window as unknown as Record<string, unknown>
                        ).dataLayer as
                            | Array<Record<string, unknown>>
                            | undefined;
                        if (dataLayer) {
                            dataLayer.push({
                                event: "resume_download",
                                value: 50,
                                currency: "USD",
                            });
                        }
                    }
                }}
            >
                <Download className="mr-3 h-5 w-5" />
                {children || "Download Resume"}
            </a>
        </Button>
    );
}
