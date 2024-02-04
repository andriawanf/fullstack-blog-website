/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
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
        red: { 900: "#9f1b1b" },
        white: {
          50: "#fefefe",
          100: "#fcfcfc",
          200: "#fafafa",
          300: "#f8f8f8",
          400: "#f7f7f6",
          500: "#f5f5f4",
          600: "#dfdfde",
          700: "#aeaead",
          800: "#878786",
          900: "#676766",
        },
        black: {
          50: "#e8e8e8",
          100: "#b6b6b6",
          200: "#939393",
          300: "#626262",
          400: "#434343",
          500: "#141414",
          600: "#121212",
          700: "#0e0e0e",
          800: "#0b0b0b",
          900: "#080808",
        },
        blueLight: {
          50: "#f9fdfe",
          100: "#edf9fc",
          200: "#e4f7fa",
          300: "#d8f3f8",
          400: "#d1f1f7",
          500: "#c5edf5",
          600: "#b3d8df",
          700: "#8ca8ae",
          800: "#6c8287",
          900: "#536467",
        },
        blueDark: {
          50: "#edf3f5",
          100: "#c7dae0",
          200: "#acc8d1",
          300: "#86afbb",
          400: "#6e9fae",
          500: "#4a879a",
          600: "#437b8c",
          700: "#35606d",
          800: "#294a55",
          900: "#1f3941",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#f5f5f419,#f5f5f419)",
        gradient1:
          "linear-gradient(90deg ,#141414,#14141400,#14141400,#141414)",
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 140s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
});