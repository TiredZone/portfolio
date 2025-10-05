import { Badge } from "@/components/common/badge";
import { Container } from "@/components/layout/container";
import { TrendingUp } from "lucide-react";

interface Metric {
    label: string;
    value: string;
    improvement?: string;
}

interface CaseStudyHeroProps {
    title: string;
    description: string;
    client: string;
    duration: string;
    role: string;
    tech: string[];
    image?: string;
    metrics?: Metric[];
}

export function CaseStudyHero({
    title,
    description,
    client,
    duration,
    role,
    tech,
    metrics,
}: CaseStudyHeroProps) {
    return (
        <section className="bg-gradient-to-br from-royal-700 to-royal-900 dark:from-royal-900 dark:to-black text-white py-16 md:py-24">
            <Container>
                <div className="max-w-4xl mx-auto">
                    {/* Client Badge */}
                    <div className="mb-6">
                        <Badge variant="gold">{client}</Badge>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                        {title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-royal-100 mb-8">{description}</p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 mb-8 text-sm text-royal-200">
                        <div>
                            <span className="font-semibold">Duration:</span>{" "}
                            {duration}
                        </div>
                        <div>
                            <span className="font-semibold">Role:</span> {role}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {tech.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 bg-white/10 rounded-full text-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Metrics */}
                    {metrics && metrics.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {metrics.map((metric, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <TrendingUp className="w-4 h-4 text-gold-400" />
                                        <div className="text-xs text-royal-200">
                                            {metric.label}
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold">
                                        {metric.value}
                                    </div>
                                    {metric.improvement && (
                                        <div className="text-xs text-gold-400 font-medium mt-1">
                                            {metric.improvement}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}
