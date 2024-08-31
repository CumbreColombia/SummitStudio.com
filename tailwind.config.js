/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./Summit/**/*.html"],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}



