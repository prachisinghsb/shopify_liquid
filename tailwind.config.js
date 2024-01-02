/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.css",
    "./assets/*.liquid",
    "./layout/*.liquid",
"./sections/*.liquid",
"./snippets/*.liquid", 
"./templates/*.liquid",
"./templates/customers/*.liquid"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

