module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
    './src/**/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 'project': '3fr 4.5fr 4.5fr',
        project: '0.6fr 1.2fr 1.2fr',
        home: 'repeat(5, 0.6fr)',
        landing: '1.61fr 1fr',
      },
      colors: {
        black: '#242424',
        brand: '#FFA500', // 'rgb(240 120 48)',
      },
      borderColor: {
        DEFAULT: '#242424',
      },
      transitionDuration: {
        DEFAULT: '600ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
    fontFamily: {
      sans: ['Clash Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui'],
      serif: ['freight-big-pro', 'serif'],
    },
    fontWeight: {
      DEFAULT: '300',
    },
  },
  variants: {
    extend: {},
  },
};
