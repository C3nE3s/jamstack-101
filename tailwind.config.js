const { fontFamily } = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.5rem', { lineHeight: '1.955' }],
      sm: ['0.75rem', { lineHeight: '1.955' }],
      base: ['1rem', { lineHeight: '1.955' }],
      lg: ['1.125rem', { lineHeight: '1.955' }],
      xl: ['1.25rem', { lineHeight: '1.62' }],
      '2xl': ['1.5rem', { lineHeight: '1.62' }],
      '3xl': ['1.625rem', { lineHeight: '1.62' }],
      '4xl': ['2.25rem', { lineHeight: '1.21' }],
      '5xl': ['3rem', { lineHeight: '1.21' }],
      '6xl': ['3.9375rem', { lineHeight: '1.21' }],
      '7xl': ['4.75rem', { lineHeight: '1.21' }],
      '8xl': ['6rem', { lineHeight: '1.466' }],
      '9xl': ['8.3125rem', { lineHeight: '1.1466' }],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'gray-light': '#414141',
      'gray-dark': '#1A1A1A',
      'gray-darkest': '#151515'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Menlo', ...fontFamily.mono ]
      },
    },
  },
  plugins: [],
}
