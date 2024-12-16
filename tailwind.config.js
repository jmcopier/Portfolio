/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        framed: '-50px -50px 0 -40px #FEF08A, 50px 50px 0 -40px #FEF08A',
      },
      colors: {
        'primary': '#CCD6F6',
        'secondary': '#8892B0',
        'jesse': '#FEF08A'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #002855, #001524)',
      },
      fontFamily: {
        inter: ['Inter'],
      }
    },
    variants: {
      extend: {
        scrollBehavior: ['responsive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

