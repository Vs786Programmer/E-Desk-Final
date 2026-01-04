/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './clerk-react/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // common spacing, sizing, and layout utilities used in global CSS
    { pattern: /^(p|m|px|py|pl|pr|pt|pb)-/ },
    { pattern: /^(text|bg|border|hover:bg|hover:text|focus:ring|ring|rounded|shadow|flex|items|gap|transition|duration|absolute|inset|left|top|w|h|z)-/ },
    'overflow-hidden',
    'hidden',
    'inline-flex',
    'justify-center',
    'font-medium',
    'focus:outline-none',
  ],
  plugins: [require('tailwindcss-animate')],
}
