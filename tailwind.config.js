module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'main-background': 'url("/src/assets/images/background.png")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
