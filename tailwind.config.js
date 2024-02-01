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
      
    },
  },
  plugins: [],
};
