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
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
