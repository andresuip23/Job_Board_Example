/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      customStyles:{
        'button':' w-24 h-16 mr-4 rounded-md border border-blue-500 border-opacity-50 shadow-md text-blue-500 hover:bg-blue-500 hover:text-white',
      },
    },
  },
  plugins: [],
}
