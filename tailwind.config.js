/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
        'nunito': ['Nunito'],
      },
      colors: {
        'primary': "#FFD012",
        'activeText': "#24292E",
        'disableText': "#6b7280",
        'ligthBg': "#FFF9DE",
      }
    },
  },
  plugins: [],
}