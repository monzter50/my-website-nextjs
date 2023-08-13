/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['var(--font-family)']
      },
      colors: {
        primary:"var(--first-color)",
        secondary:"var(--second-color)",
        neutral:"var(--neutral-color)",
        "blue-dark":"var(--blue-dark)",
        blue:"var(--blue)",
        "blue-contrast":"var(--blue-contrast)",
        "blue-ligth":"var(--black-contrast)",
        "light-grey":"var(--light-grey)",
        grey:"var(--grey)"
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
      }
    },
  },
  plugins: [],
}
