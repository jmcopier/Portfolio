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
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #002855, #001524)',
      },
      fontFamily: {
        inter: ['Inter'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

