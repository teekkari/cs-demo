/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#89c2ec',
        accent: '#4bc289',
        dark: '#1a1f2b'
      }
    },
  },
  plugins: [],
}
