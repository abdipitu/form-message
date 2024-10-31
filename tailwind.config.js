/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '280px'
      },
      colors: {
        'primary': '#737373',
        'secondary': '#252525',
        'tertiary': '#404040',
      },
    },
  },
  plugins: [],
}

