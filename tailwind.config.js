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
      extend: {
        backgroundImage: {
          'hero-mobile': "url('../../src/assets/home_mobile.png')",
          'hero-desktop': "url('../../src/assets/home_desktop.png')",
          'footer_db': "url('../../src/assets/footer_db.png')",
        }
      }
  },
  variants: {},
  plugins: []
}