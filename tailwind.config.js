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
      },
      borderColor: {
        DEFAULT: 'rgba(36,36,36,0.5)',
      },
    },
    fontFamily: {
      sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
      serif: ['freight-big-pro', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
};
