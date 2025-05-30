/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      // Adding custom fonts
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        home: "url('/bg-compressed.png')",
      },
    },
  },
  plugins: [],
};
