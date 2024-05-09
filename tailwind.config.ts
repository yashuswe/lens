import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
       backgroundColor: theme => ({
        'transparent-green': 'rgba(1, 201, 156, 0.15)',
        'transparent-blue':'rgba(3,177,249,0.2)',
        'transparent-red':'rgba(255,107,102,0.2)',
        'transparent-yellow':'rgba(255,159,49,0.15)',
      }),
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '25%, 75%': { opacity: '1' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 5s ease-in-out infinite 1s',
      },
    },
    typography: (theme: any) => ({
      dark: {
        css: {
          color: 'white',
        },
      },
    }),
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      rale: ['Raleway', 'sans-serif'],
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
