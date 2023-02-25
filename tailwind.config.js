module.exports = {
  content: [
    `./css/**/*.css`,
    `./**/*.html`,
    `./js/**/*.js`,
  ],
  plugins : [],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': "768px",
      "lg": "1024px",
      'xl': '1280px',
      "2xl": "1536px",
    }
  },
}
