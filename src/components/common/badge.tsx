import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "gold" | "royal";
    className?: string;
}

export function Badge({
    children,
    variant = "default",
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                {
                    "bg-royal-100 dark:bg-royal-800 text-royal-700 dark:text-royal-300":
                        variant === "default",
                    "bg-gold-100 dark:bg-gold-900/20 text-gold-700 dark:text-gold-400":
                        variant === "gold",
                    "bg-royal-600 text-white": variant === "royal",
                },
                className
            )}
        >
            {children}
        </span>
    );
}
