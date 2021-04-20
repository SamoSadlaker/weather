module.exports = {
  purge: [],
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
