/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        'purple': '#511281',
        'mint-green': '#00917C',
        'light-green':'#005555',
        'deep-blue': '#11009E',
        'dark-blue': '#03001f',

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
