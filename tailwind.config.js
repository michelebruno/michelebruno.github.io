module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
    './src/**/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
  ],
  theme: {
    extend: {
      content: {
        comma: ',',
        arrow: ' ↗',
      },
      gridTemplateColumns: {
        // 'project': '3fr 4.5fr 4.5fr',
        project: '0.6fr 1.2fr 1.2fr',
        home: 'repeat(5, 0.6fr)',
        landing: '1.61fr 1fr',
      },
      colors: {
        black: '#0f0f0f',
        brand: '#1768ff', // 'rgb(240 120 48)',
        gray: '#A2A2A2',
        light: '#f0f0f0',
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
      lineHeight: {
        DEFAULT: 1.75,
      },
      fontWeight: {
        DEFAULT: '300',
      },
    },

    // Satoshi no, fa cagare
    // Switzer carino
    fontFamily: {
      sans: [
        'Switzer',
        'General Sans',
        'Clash Grotesk',
        'Switzer',
        'ui-sans-serif',
        'sans',
        'system-ui',
      ],
      serif: ['Gambetta', 'freight-big-pro', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
};
