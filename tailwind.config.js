/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // This is the line you need to add/check
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}