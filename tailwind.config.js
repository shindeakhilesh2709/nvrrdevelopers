/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#19C5C8",
          dark: "#14a8ab",
          light: "#7CE4E5",
        },
        navy: {
          DEFAULT: "#0D233F",
          light: "#1a3a5c",
          dark: "#081628",
        },
        accent: "#7CE4E5",
        surface: "#F7F9FB",
        glass: "rgba(255,255,255,0.15)",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        button: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(13, 35, 63, 0.15)",
        "luxury-lg": "0 35px 60px -15px rgba(13, 35, 63, 0.2)",
        glow: "0 0 40px rgba(25, 197, 200, 0.3)",
        card: "0 10px 40px rgba(13, 35, 63, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-luxury":
          "linear-gradient(135deg, #0D233F 0%, #1a3a5c 50%, #0D233F 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #19C5C8 0%, #7CE4E5 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
