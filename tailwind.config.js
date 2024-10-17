/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',    
        'sm': '640px',    
        'md': '768px',   
        'lg': '1024px',   
        'xl': '1280px',   
      },
      height: {
        '13': '52px',
      },
      colors: {
        'custom-blue': '#dceafe',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Helvetica', 'Arial', 'sans-serif'],
        'roboto': ['Roboto', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      
      plugins: [
        require('@tailwindcss/line-clamp'),
      ],
    },
  },
  plugins: [],
}
