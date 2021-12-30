module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
        './src/**/**/*.{js,jsx,ts,tsx,vue,css,mdx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                // 'project': '3fr 4.5fr 4.5fr',
                'project': '0.6fr 1.2fr 1.2fr',
                'home': 'repeat(5, 0.6fr)'
            },
            colors: {
                black: '#242424'
            },
        },
        fontFamily: {
            'sans': ['Manrope', 'ui-sans-serif', 'system-ui',],
            'serif': ['freight-big-pro', 'serif']
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
