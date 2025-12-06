
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                wakashiro: {
                    "primary": "#D97706",
                    "primary-content": "#ffffff",
                    "secondary": "#92400E",
                    "accent": "#F59E0B",
                    "neutral": "#3D2B1F",
                    "base-100": "#FFF8E1",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272",
                },
            },
            "retro",
            "coffee",
        ],
    },
};
export default config;
