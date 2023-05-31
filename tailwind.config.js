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
          'hero-mobile': "url('/assets/home_mobile.png')",
          'hero-desktop': "url('/assets/home_desktop.png')",
          'footer_db': "url('/assets/footer_db.png')",
        }
      }
  },
  variants: {},
  plugins: []
}