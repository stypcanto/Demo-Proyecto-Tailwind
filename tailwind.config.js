/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  purge:[],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants:{
    opacity: ['responsive','hover','focus','disabled'],
    backgroundColor: ['active','hover','focus','disabled'],
    ringWidth:['active','focus'],
    textColor:['disabled'], 
  },
  plugins: [],
}

