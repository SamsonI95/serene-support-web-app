/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2E72EE",
        "nav-text-color": "#A3A3A3",
        "higlight-text-color": "#464646",
        "secondary-color": "#002261",
        "services-color": "#F3F7FE",
        "border-line-color": "#A3A3A3",
        "bcg-color": "#00CCFF"
      },
      spacing: {
        "0.25": "0.063rem",
        "7": "1.938rem",
        "59": "227px",
        "69": "284px",
        "85": "25rem",
        "81": "330px",
        "83": "360px",
        "95": "434px",
        "97": "421px",
        "140": "500px",
        "143": "550px",
        "145": "579px",
        "170": "610px",
        "200": "950px",
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
