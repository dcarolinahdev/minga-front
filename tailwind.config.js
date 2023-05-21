/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
      './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        roboto_serif: ['Roboto'],
        poppins: ['Poppins'],
      },
      extend: {}
  },
  variants: {},
  plugins: []
}