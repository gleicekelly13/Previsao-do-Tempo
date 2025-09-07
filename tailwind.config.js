/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  //Avisa ao Tailwind que o dark mode é ativado por classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

