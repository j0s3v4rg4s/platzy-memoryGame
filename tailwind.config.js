module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.scss',
    './src/**/*.css',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
