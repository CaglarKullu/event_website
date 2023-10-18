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
        'primary': 'rgb(186, 155, 118)',
        'secondary': 'rgb(233, 231, 233)',
        'footer-background': 'rgb(37, 34, 36)',
        'body-background': 'rgb(255, 255, 255)',
        'text-color': 'rgb(79, 79, 79)',
      }
    },
  },
  plugins: [],
}
export default config
