import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'rgb(var(--text-color) / <alpha-value>)',
        'secondary-color': 'rgb(var(--background-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
export default config
