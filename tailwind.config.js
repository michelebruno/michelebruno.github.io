module.exports = {
    mode: 'jit',
    // These paths are just examples, customize them to match your project structure
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue,css}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {

            gridTemplateColumns: {
                 'project': '0.6fr 1.2fr 1.2fr',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
    ],
}
