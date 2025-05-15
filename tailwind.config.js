/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Professional palette with rich blue tones
      primary: "#3b82f6", // Bright blue
      primaryDark: "#1d4ed8", // Darker blue
      primaryLight: "#60a5fa", // Lighter blue
      secondary: "#fb9718", // Orange accent
      secondaryDark: "#d28422", // Darker orange
      secondaryLight: "#fcd34d", // Light yellow-orange
      dark: "#0f172a", // Very dark blue (almost black)
      darkBlue: "#1e293b", // Dark blue-gray
      light: "#f8fafc", // Off-white
      white: "#ffffff", // Pure white
      gray: "#64748b", // Medium gray
      lightGray: "#cbd5e1", // Light gray
      darkGray: "#334155", // Dark gray
      black: "#020617", // Near black
      transparent: "transparent", // Add transparent color
    },
    extend: {
      boxShadow: {
        highlight: "0px 0px 20px 0px rgba(59, 130, 246, 0.5)",
        glow: "10px 10px 30px 15px rgba(59, 130, 246, 0.3)",
        accentGlow: "10px 10px 30px 15px rgba(251, 151, 24, 0.3)",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
