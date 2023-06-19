/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Nunito_Sans: ["Nunito Sans", "sans-serif"],
      Ubuntu_Mono: ["Ubuntu Mono", "monospace"],
      ibm: ["IBM Plex Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      popins: ["Poppins", "sans-serif"],
    },
    screens: {
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      sxl: { max: "1141px" },
      // => @media (max-width: 1141px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      ml: { max: "960px" },
      // => @media (max-width: 960px) { ... }

      airbnbml: { max: "800px" },
      // => @media (max-width: 800px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      ms: { max: "568px" },
      // => @media (max-width: 568px) { ... }

      xs: { max: "540px" },
      // => @media (max-width: 540px) { ... }
      sxs: { max: "480px" },
      // => @media (max-width: 540px) { ... }

      lexs: { max: "440px" },
      // => @media (max-width: 440px) { ... }
      exs: { max: "358px" },
      // => @media (max-width: 440px) { ... }
    },

    top: {
      22: "88px",
    },

    extend: {
      width: {
        22: "5.5rem",
        40: "10rem",
        68: "272px",
        88: "22rem",
        100: "25rem",
        200: "50rem",
        85: "85px", // 85: '85px'
      },
    },
  },
  plugins: [],
};
