/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'space-mono': ['Space Mono','systeme ui'],
      'work-sans': ['Work-Sans','systeme ui'],
     
    },
    fontWeight: {
      bold: '700',
      semibold: '600',
      normal: '400',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'h1' : '67px',
      'h2' : '51px',
      'h3' : '38px',
      'h4' : '28px',
      'base' : '16px',
      'caption':'12px',
    },
    extend: {
      colors: {
        'background': '#2B2B2B',
        'background-secondary': '#3B3B3B',
        'caption-text': '#858584',
        'cta': '#A259FF',
        'gradient1': "",
        'gradient2': "",
      },
      lineHeight: {
        'extra': '73.5px',
        'large': '45.5px',
        'medium': '39.5',
        'small' : '35.5',
        'big-small':'22.4'
      }
    },
  },
  plugins: [],
}