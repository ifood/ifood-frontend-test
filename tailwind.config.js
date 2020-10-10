const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
    theme: {
        colors: {
            ...colors,
            // primary: '#f82525',
            //secondary: '#ecc94b',
        },
        fontFamily: {
            display: ['Poppins', 'sans-serif'],
            body: ['Barlow', 'sans-serif'],
            sans: ['Barlow', 'sans-serif'],
        },
        extend: {
            zIndex: {
                "-1": "-1",
            },
            transformOrigin: {
                "0": "0%",
            },
        },
    },
    variants: {
        gridTemplateColumns: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
}
