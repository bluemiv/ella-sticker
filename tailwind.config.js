const toTailwindColor = (colorKey, colorPalette) =>
  colorPalette.reduce((acc, color, idx) => ({ ...acc, [`${colorKey}-${idx * 100}`]: color }), {});

const space = {
  '2xs': '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
  '2xl': '5rem',
};

const height = {
  header: '60px',
  footer: '120px',
  contents: 'calc(100vh - 60px - 120px)',
};

const colors = {
  text: '#212529',
  'd-text': '#f1f3f5',

  'sub-text': '#868e96',
  'd-sub-text': '#adb5bd',

  background: '#ffffff',
  'd-background': '#061221',

  ...toTailwindColor('brand', [
    '#e6f7ff',
    '#bae7ff',
    '#91d5ff',
    '#69c0ff',
    '#40a9ff',
    '#1890ff',
    '#096dd9',
    '#0050b3',
    '#003a8c',
    '#002766',
  ]),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      padding: { ...space },
      margin: { ...space },
      gap: { ...space },
      height: { ...height },
      minHeight: { ...height },
      colors: { ...colors },
    },
  },
  plugins: [],
};
