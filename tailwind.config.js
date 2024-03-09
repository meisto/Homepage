/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            // "green": "#87AF87",
            green: '#4C5C51',
         },
         fontFamily: {
            playfair: ['Playfair Display', 'serif'],
            montserrat: ['Montserrat', 'serif'],
            titillium: ['Titillium Web', 'sans-serif'],
            didot: ['GFS Didot', 'serif'],
         },
      },
   },
   plugins: [],
};
