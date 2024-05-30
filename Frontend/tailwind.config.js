/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        // xl: '1440px',
      },
      colors: {
        customBg: 'rgba(var(--background))',
        headline: 'rgba(var(--headline))',
        paragraph: 'rgba(var(--paragraph))',
        btnCol: 'rgba(var(--btn))',
        btnHov: 'rgba(var(--btnHov))',
        btnText: 'rgba(var(--btnText))',
        card: 'rgba(var(--card))',
        cardHov: 'rgba(var(--cardHov))',
        badge: 'rgba(var(--badge))',
        badgeText: 'rgba(var(--badgeText))',
      },
      backgroundImage: {
        'gradient': 'var(--gradient)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

