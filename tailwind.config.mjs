/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        'albert-sans': ['"Albert Sans"', 'sans-serif'],
				'barlow': ['"Barlow"', 'sans-serif'],
      },
		},
	},
	plugins: [],
}
