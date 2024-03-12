/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      
      colors: {       
        'theme-color': {
          100: '#007bff',
          200: '#0f52ba',
          400: 'rgba(255,255,255,.1)',
          700: '#1135a7',
        },
        'theme-primary': {
          // 100: '#f22f2f',
          // 200: '#ab0c0c',
         
          700: '#007bff',
        },
      },    
     
    },
  },

 
 
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('@tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'), 
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addVariant }) {
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
      );
      addVariant(
        "supports-scrollbars",
        "@supports selector(::-webkit-scrollbar)"
      );
      addVariant("children", "& > *");
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    },
  ],
}