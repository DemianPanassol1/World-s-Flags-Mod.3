module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black': '#212121'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
