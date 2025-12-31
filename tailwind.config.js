/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./script.js"],
    theme: {
        extend: {
            colors: {
                body: '#0f172a',
                card: 'rgba(30, 41, 59, 0.6)',
                'card-hover': 'rgba(51, 65, 85, 0.6)',
                accent: {
                    DEFAULT: '#38bdf8',
                    glow: 'rgba(56, 189, 248, 0.3)',
                },
                border: 'rgba(255, 255, 255, 0.05)',
                text: {
                    primary: '#f8fafc',
                    secondary: '#94a3b8',
                    muted: '#64748b',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                handwriting: ['"Comforter Brush"', 'cursive'],
            },
            animation: {
                float: 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                fadeInUp: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
