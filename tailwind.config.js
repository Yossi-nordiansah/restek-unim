/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  screens: {
    'xs': '380px',
    'sm' : '640px',
    'md' : '768px',
    'lg' : '1024px',
    'xl' : '1280px',
  },
    extend: {
      fontFamily:{
        poppins: ['poppins-regular'],
        poppins_medium: ['poppins-medium'],
        poppins_thin:['poppins-thin'],
        poppins_semibold:['poppins-semibold'],
        poppins_bold: ['poppins-bold'],
        poppins_extrabold:['poppins-extrabold'],
        montserrat_semibold: ['montserrat-semibold'],
        montserrat_bold: ['montserrat-bold'],
        pollerone:['Poller One'],
        rubikmono_one:['Rubik Mono One']
      }
    },
  },
  plugins: [],
}

