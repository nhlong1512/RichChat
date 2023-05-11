/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: { // add new font family
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false // <== disable this!
  },
}
