import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./content/**/*.{md,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                royal: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca", // Primary royal blue
                    800: "#3730a3",
                    900: "#312e81",
                    950: "#1e1b4b",
                },
                gold: {
                    50: "#fffbf0",
                    100: "#fff5d6",
                    200: "#ffe8a8",
                    300: "#ffd56f",
                    400: "#ffc23d", // Primary gold
                    500: "#f59e0b",
                    600: "#d97706",
                    700: "#b45309",
                    800: "#92400e",
                    900: "#78350f",
                    950: "#451a03",
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.3s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [typography],
};

export default config;
