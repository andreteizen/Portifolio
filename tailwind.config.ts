import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#fcedda',
        'secondary-light': '#ee4e34',
        'primary-dark': '#2e2e2e',
        'secondary-dark': '#10e956',
      },
    },
  },
  plugins: [],
}
export default config
