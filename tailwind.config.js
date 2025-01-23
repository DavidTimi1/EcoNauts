export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    spacing: {
      '0': '0px',
      '1': '0.3125rem',
      '2': '1.25rem',
      '3': '1.875rem',
      '4': '2.5rem',
      '5': '3.125rem',
      '6': '3.75rem',
      '7': '4.375rem',
      '8': '5rem',
      '9': '5.625rem',
      '10': '6.25rem',
    },
    extend: {
      colors: {
        green: {
          light: '#01a521',
          lime: "#bfdc72",
          dark: '#044f0f',
        },
      }
    },
  },
  plugins: [],
}