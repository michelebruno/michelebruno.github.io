module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue,css}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateColumns: {
                'project': '0.6fr 1.2fr 1.2fr',
            }
        },
        fontFamily: {
            'sans': ['Manrope', 'ui-sans-serif', 'system-ui',],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
