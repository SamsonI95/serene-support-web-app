/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2E72EE",
        "nav-text-color": "#A3A3A3",
        "secondary-color": "#002261"
      },
      spacing: {
        "85": "25rem",
        "1240": "77.5rem",
        "1400": "87.5rem",
      },
    },
  },
  plugins: [],
};
