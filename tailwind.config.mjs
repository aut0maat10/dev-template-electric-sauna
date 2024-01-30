/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'albert-sans': ['"Albert Sans"', 'sans-serif'],
				'barlow': ['"Barlow"', 'sans-serif'],
      },
			animation: {
        'fadein': 'fadein 1s linear',
				'fadeinright': 'fadeinright 1s both',
				'fadeinleft': 'fadeinleft 1s both',
				'wiggle': 'wiggle .3s linear'
      },
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
  				'100%': { opacity: 1 }
				},
				fadeinright: {
					'0%': {
						transform: 'translateX(50px)',
						opacity: 0
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1
					}
				},
				fadeinleft: {
					'0%': {
						transform: 'translateX(-50px)',
						opacity: 0
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: 1
					}
				},
				wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
			}
		},
	},
	plugins: [],
}
