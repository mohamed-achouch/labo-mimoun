/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "custom-primary":"#262536",
        "custom-secondary":"#59c7fa",
        "custom-third":"#d83850",
      }
    },
  },
  plugins: [],
}

