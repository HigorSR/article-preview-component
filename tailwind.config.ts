import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Very-Dark-Grayish-Blue": "hsl(217, 19%, 35%)",
        "Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
        "Grayish-Blue": "hsl(212, 23%, 69%)",
        "Light-Grayish-Blue": "hsl(210, 46%, 95%)",
      }
    },
  },
  plugins: [],
}
export default config
