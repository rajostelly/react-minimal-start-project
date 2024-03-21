/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#232250",
        white2: "#FAFAFA",
        gray: "#848484",
        grayOpacity: "rgb(223,223,223,0.6)",
      },
    },
  },
  plugins: [],
};
