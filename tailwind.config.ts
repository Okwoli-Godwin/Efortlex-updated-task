/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#081A5B",
        rgba: "rgba(0,0,0,0.5)",
        white: "#fff",
        primary: "#081A5B",
        paragraph: "#434141",
      },
      borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
      },
      screens: {
				sm: { min: "300px", max: "500px" },
				md: { min: "768px", max: "1024px" },
				lg: { min: "1025px", max: "1279px" },
				xl: { min: "1280px", max: "1535px" },
				"2xl": { min: "1536px" },
			},
    },
  },
  plugins: [],
}

