// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      strokeWidth: {
        '2' :'3px'
      },
      spacing:{
        '40' : '40px',
        '50' : '50px',
         '60' : '60px'
      }
    },
  },
  plugins: [],
}
