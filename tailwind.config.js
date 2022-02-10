module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      desktop: '850px'
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      'krokodil-yellow': '#EB9916',
      'krokodil-yellow-dark': '#C58116',
      gray: '#8B8B8B'
    },
    fontSize: {
      xs: ['16px', { lineHeight: '16px', letterSpacing: '0.02em' }], // H9 Desktop
      sm: ['18px', { lineHeight: '16px', letterSpacing: '0.015em' }], // H8 Mobil
      sm2: ['19px', { lineHeight: '16px', letterSpacing: '0.01em' }], // H6 Mobil
      base: ['20px', { lineHeight: '18px', letterSpacing: '0.01em' }], // H8 Desktop
      base2: ['20px', { lineHeight: '20px', letterSpacing: '0.01em' }], // H9 Mobil
      normal: ['20px', { lineHeight: '26px', letterSpacing: '0.01em' }], // Normal Desktop
      normal: ['20px', { lineHeight: '26px', letterSpacing: '0.01em' }], // Normal Desktop
      lg: ['26px', { lineHeight: '26px', letterSpacing: '0em' }], // H7 Desktop
      lg2: ['26px', { lineHeight: '24px', letterSpacing: '0em' }], // H4 Mobil
      xl: ['30px', { lineHeight: '27px', letterSpacing: '0.01em' }], // H6 Desktop
      '2xl': ['30px', { lineHeight: '30px', letterSpacing: '0.01em' }], // H5 Desktop
      '3xl': ['40px', { lineHeight: '35px', letterSpacing: '0em' }], // H2 Mobil
      '4xl': ['50px', { lineHeight: '45px', letterSpacing: '0.01em' }], // H3
      '6xl': ['65px', { lineHeight: '58px', letterSpacing: '0em' }], // H2 Desktop
      '7xl': ['110px', { lineHeight: '95px', letterSpacing: '0.02em' }], // H1 Desktop
    },
    fontFamily: {
      yanone: ['Yanone Kaffeesatz', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    },
    extend: {},

  },
  plugins: [require('@tailwindcss/typography')],
}
