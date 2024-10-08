/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   Inter18: "Inter 18pt",
      //   Inter24: "Inter 24pt",
      //   Inter28: "Inter 28pt",
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "custom-purple": "0px 24px 24px -12px rgba(162, 145, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
