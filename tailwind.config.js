/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#137fec", // Axis Blue (Main)
                    dark: "#2a51baff",    // Dark Blue (Secondary Mockup)
                },
                accent: {
                    DEFAULT: "#10b981", // Emerald (Secondary Mockup)
                },
                background: {
                    light: "#ffffff", // Main Light
                    dark: "#101922",  // Main Dark
                    alt: "#0f172a",   // Secondary Dark
                },
                slate: {
                    850: "#172033", // Custom dark shade
                }
            },
            fontFamily: {
                sans: ["Manrope", "Inter", "sans-serif"],
                display: ["Manrope", "sans-serif"],
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(19, 127, 236, 0.3)',
            }
        },
    },
    plugins: [],
}
