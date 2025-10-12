import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-sm hover:shadow-md",
                outline:
                    "border-2 border-royal-300 dark:border-royal-600 bg-white dark:bg-gray-800 text-royal-700 dark:text-royal-200 shadow-sm hover:bg-royal-50 dark:hover:bg-royal-900/40 hover:border-royal-400 dark:hover:border-royal-500 hover:shadow-md",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2 text-base has-[>svg]:px-3",
                sm: "h-9 rounded-md gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
                lg: "h-12 rounded-md px-8 text-lg has-[>svg]:px-6",
                icon: "size-10",
                "icon-sm": "size-9",
                "icon-lg": "size-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
