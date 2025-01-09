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
            'sub-title': ['0.8125rem', { /*13px/25px-lh*/
                lineHeight: '1.5625rem',
                letterSpacing: '0.0625rem',
                fontWeight: 'bold'
            }],
            'body': [ /*15px-fs/25px-lh*/
                '0.9375rem', {
                    lineHeight: '1.5625rem',
                }
            ],
            'overline': [
                /*14px-fs, 10-ls*/
                '0.875rem', {
                    letterSpacing: '0.625rem',
                    fontWeight: "regular",
                }
            ],
            'intro-title': [
                /*36px-fs 40px-lh*/
                '2.25rem', {
                    lineHeight: '2.5rem',
                    letterSpacing: '0.080625rem',
                    fontWeight: 'bold',
                }
            ],
            'intro-tablet': [
                /*56px-fs 58px-lh 2px-ls*/
                '3.5rem', {
                    lineHeight: '3.625rem',
                    letterSpacing: '0.125rem',
                }
            ],
            'h2': [
                /*40-fs 44-lh*/
                '2.5rem', {
                    lineHeight: '2.75rem',
                    letterSpacing: '0.09375rem',
                    fontWeight: 'bold',
                }
            ],
            'h4': [
                '1.75rem', {
                    lineHeight: '1.3571',
                    letterSpacing: '0.125rem',
                    fontWeight: 'bold',
                }
            ]
        },
        fontFamily: {
            'sans': ['Manrope'],
        }
    },
    plugins: [],
} satisfies Config

