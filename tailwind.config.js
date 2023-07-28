/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
    content: ["./resources/**/*.jsx"],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
        },
        colors: {
            ...colors,
            "amber-100": "#FEDA68",
            "amber-300": "#FDCE36",
            "amber-500": "#FDC204",
            "amber-700": "#CA9B03",
            "amber-900": "#987402",
            "red-100": "#ED7E88",
            "red-300": "#E75360",
            "red-500": "#E12838",
            "red-700": "#B4202D",
            "red-900": "#871822",
            "java-100": "#79CFD7",
            "java-300": "#4DBFCA",
            "java-500": "#20AFBD",
            "java-700": "#1A8C97",
            "java-900": "#136971",
            "gray-50": "#FBFBFB",
            "gray-100": "#E8E8E8",
            "gray-300": "#B5B5B5",
            "gray-500": "#838282",
            "gray-700": "#4F4F4F",
            "gray-900": "#1C1C1C",
            white: "#FFFFFF",
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
        },
        backgroundImage: {
            logo: "url('/public/image/iapm-logo.webp')",
            wave: "url('/assets/image/wave.svg')",
        },
    },
    plugins: [],
};
