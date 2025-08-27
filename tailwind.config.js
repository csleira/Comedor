/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cascadiacode: ["CascadiaCode", , "Courier New", "monospace"],
        cascadiacode_italic: ["CascadiaCode", "cursive"],
        arima:["Arima","arial"],
        mulish:["Mulish","system-ui"]
      },
    },
    plugins: [],
  }

}
