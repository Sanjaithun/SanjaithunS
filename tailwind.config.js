/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ✅ Add necessary custom colors
      colors: {
        border: "#e5e7eb",      // for border-border
        background: "#f8fafc",  // for bg-background
        foreground: "#1f2937",  // for text-foreground
      },
      borderColor: {
        border: "#e5e7eb",
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        matrix: "matrix 10s linear infinite",
        orbit: "orbit 5s ease-in-out",
        particle: "particle 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%": { "box-shadow": "0 0 5px rgba(59, 130, 246, 0.5)" },
          "100%": { "box-shadow": "0 0 20px rgba(59, 130, 246, 0.8)" },
        },
        matrix: {
          "0%": { transform: "translateY(-100vh)" },
          "100%": { transform: "translateY(100vh)" },
        },
        orbit: {
          "0%": { transform: "translate(0, 0) scale(0.8)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translate(0, 0) scale(1)", opacity: "1" },
        },
        particle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(180deg)" },
        },
      },
    },
  },
  plugins: [],
}
