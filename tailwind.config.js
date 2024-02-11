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
        "7": "1.938rem",
        "59": "227px",
        "69": "284px",
        "85": "25rem",
        "81": "330px",
        "95": "434px",
        "145": "579px",
        "1240": "77.5rem",
        "1400": "87.5rem",
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "#2E72EE white"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar" : {
            widht: "10px"
          },
          "&::-webkit-scrollbar-track" : {
            background : "white"
          }, 
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor : "#2E72EE",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }

      addUtilities(newUtilities, ["responsice", "hover"])
    }
  ],
};
