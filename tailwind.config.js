export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#ffffff",
                    alt: "#f8fafc",
                    card: "#f1f5f9",
                },
                text: {
                    primary: "#0f172a",
                    secondary: "#334155",
                    tertiary: "#475569",
                    muted: "#64748b",
                    placeholder: "#94a3b8",
                },
                accent: {
                    primary: "#059669",
                    secondary: "#0d9488",
                },

                "dark-bg": {
                    DEFAULT: "#0f172a",
                    card: "#1e293b",
                    element: "#334155",
                },
                "dark-text": {
                    primary: "#ffffff",
                    secondary: "#cbd5e1",
                    muted: "#94a3b8",
                },
                "dark-accent": {
                    primary: "#34d399",
                    secondary: "#2dd4bf",
                },
            },
        },
    },
};
