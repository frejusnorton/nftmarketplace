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
    borderRadius: {
     'primary' : "20px",
    },
    
    fontSize: {
      'h1': ['67px', {
        lineHeight: '73.7px',
        fontWeight: '600',
      }],
      'h2': ['51px', {
        lineHeight: '56.1px',
        fontWeight: '600',
      }],
      'h3': ['38px', {
        lineHeight: '45.6px',
        fontWeight: '600',
      }],
      'h4': ['28px', {
        lineHeight: '39.2px',
        fontWeight: '600',
      }],
      'h5': ['22px', {
        lineHeight: '30.8px',
        fontWeight: '600',
      }],
      'base': ['16px', {
        lineHeight: '22.4px',
        fontWeight: '400',
      }],
      'caption': ['12px', {
        lineHeight: '13.2px',
        fontWeight: '400',
      }],
    },
    extend: {
      colors: {
        'background': '#2B2B2B',
        'background-secondary': '#3B3B3B',
        'caption-text': '#858584',
        'cta': '#A259FF',
        'gradient1': "",
        'gradient2': "",
        'white' : "#FFFFFF"
      },
      backgroundImage: theme => ({
        'gradient1': 'linear-gradient(100.92deg, #A259FF 13.57%, #FF6250 97.65%)',
        'gradient2': 'linear-gradient(128.15deg, #A259FF 49.75%, #377DF7 136.56%)',
      }),
    },
  },
  plugins: [],
}