/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center :true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#34d399',
        secondary :'#6b7280',
        dark : '#1f2937',
      },
     screens: {
      'xl' : '1380px',
     },
    },
  },
  plugins: [],
};

