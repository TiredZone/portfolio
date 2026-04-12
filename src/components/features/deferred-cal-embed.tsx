"use client";

import { useSearchParams } from "next/navigation";
import { CalEmbed } from "./cal-embed";

export function DeferredCalEmbed() {
    const searchParams = useSearchParams();
    const shouldDefer = searchParams.has("scrollTo");
    return <CalEmbed defer={shouldDefer} />;
}
