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
        'primaryDark': "#deb200",
        'primaryLight': "#ffda45",
        'primaryContent': "#120e00",
        'primaryBackground': "#f1f0ef",
        'secondary': "#12ff59",
        'secondaryLight': "#45ff7d",
        'secondaryDark': "#00de42",
        'secondaryContent': "#001205",
        'foreground': "#fbfbfb",
        'border': "#e2e1dd",
        'copy': "#292823",
        'copyLight': "#6e6b5e",
        'copyLighter': "#959184",
        'success': "#12ff12",
        'warning': "#ffff12",
        'error': "#ff1212",
        'activeText': "#24292E",
        'disableText': "#484848",
        'ligthBg': "#FFF9DE",
      },
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}