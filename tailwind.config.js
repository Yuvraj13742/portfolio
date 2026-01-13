/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'hp-dark': '#0a0a0a',
                'hp-deep-black': '#050505',
                'hp-gold': '#d4af37',
                'hp-gold-dim': '#C5A017',
                'hp-maroon': '#740001',
                'hp-green': '#1a472a',
                'hp-blue': '#0e1a40',
                'hp-parchment': '#f0e6d2',
            },
            fontFamily: {
                'harry': ['"Cinzel Decorative"', 'serif'],
                'body': ['Inter', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'sparkle': 'sparkle 2s linear infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                sparkle: {
                    '0%, 100%': { opacity: '0', transform: 'scale(0)' },
                    '50%': { opacity: '1', transform: 'scale(1)' },
                }
            }
        },
    },
    plugins: [],
}
