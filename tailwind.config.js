/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0A1931",
        "secondary" :"#FEB941",
        "tertiary":"#EFEFEF",
        "quaternary" :"#185ADB",
        "quinary":"#54D6BB",
        "fifth":"#F97316"
      },
     fontFamily:{
      myFont : ["Poppins"]
     }
    },
    screens: {
      '2xl': {'max': '2035px'},
      // => @media (max-width: 1535px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '850px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '650px'},
      // => @media (max-width: 639px) { ... }

      'xs' : {'max':'400px'}
    },
  },
  plugins: [],
}