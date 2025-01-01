/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#223634",
        secondary: "#1c2a18",
        accent: "#22c55e",
        backgroundcolor: "bg-gray-900"
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
      scrollbar: {
        thumb: {
          rounded: 'full' // Explicitly specify full rounding
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar'),
  ],
}

