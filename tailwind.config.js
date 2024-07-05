/** @type {import('tailwindcss').Config} */
import {
	black,
	current,
	inherit,
	transparent,
	white
} from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			grotesk: ['Space Grotesk', 'sans-serif']
		},
		colors: {
			black,
			white,
			current,
			transparent,
			inherit,
			gray: '#F5F5F5',
			'gray-alt': '#848484',
			blue: '#015ECC',
			violet: '#9923E0',
			red: '#F40A01',
			yellow: '#FF8F0D'
		},
		container: {
			center: true,
			padding: '1rem'
		},
		keyframes: {
			'anim-scale': {
				'0%': {
					opacity: 0,
					scale: '0.9'
				},
				'100%': {
					opacity: 1,
					scale: '1'
				}
			}
		},
		animation: {
			'anim-scale': 'anim-scale .7s'
		},
		extend: {
			transitionProperty: {
				width: 'width',
				'max-w': 'max-width'
			},
			screens: {
				mobile: '390px'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities, addComponents, theme }) {
			addUtilities({
				'.visually-hidden': {
					position: 'absolute !important',
					width: '1px !important',
					height: '1px !important',
					margin: '-1px !important',
					border: '0 !important',
					padding: '0 !important',
					'white-space': 'nowrap !important',
					'clip-path': 'inset(100%) !important',
					clip: 'rect(0, 0, 0, 0) !important',
					overflow: 'hidden !important'
				},
				'.transtion-default': {
					'transition-duration': '.2s',
					'transition-timing-function': 'ease-in-out'
				},
				'.outline-default': {
					outline: `solid ${theme('colors.blue')} 2px`,
					'outline-offset': '-1px'
				}
			});

			addComponents({
				'.input-default': {
					border: `1px solid ${theme('colors.gray-alt')}`,
					borderRadius: theme('borderRadius.md'),
					backgroundColor: theme('colors.white'),
					height: theme('spacing.11'),
					width: '100%',
					paddingLeft: 10
				}
			});
		})
	]
};
