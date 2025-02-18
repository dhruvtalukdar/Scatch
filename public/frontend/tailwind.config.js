module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // burtons: "burtons",
        // satoshi: ["Satoshi", "sans-serif"],
        // sans: ['Satoshi', 'sans-serif'],
        // poppins: ["Poppins", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}