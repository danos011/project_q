const {nextui} = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/components/(navbar|card|input|button).js',
    ],
    theme: {
        extend: {
            fontFamily: {
                'bigstem': ['BigStem-Regular', 'sans-serif'],
                'bajazzo': ['Bajazzo-Th', 'serif'],
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};