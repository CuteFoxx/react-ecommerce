import type {Config} from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "orange": "#D87D4A",
                "dark": "#101010",
                "grey": "#F1F1F1",
                "light-grey": "#FAFAFA",
                "pale-orange": "#fbaf85",
                "white": "#FFFFFF",
                "black": "#000000",
            }
        },

        fontSize: {
            'sub-title': ['0.8125rem', {
                lineHeight: '1.5625rem',
                letterSpacing: '0.0625rem',
                fontWeight: 'bold'
            }],
        }
    },
    plugins: [],
} satisfies Config

