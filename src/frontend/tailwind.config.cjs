const createMap = (arr, toValue) => {
  const map = {};
  for (const item of arr) {
    map[item] = toValue(item);
  }
  return map;
};

const pxs = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20,

  22, 24, 26, 28, 30, 32, 34, 36, 38, 40,

  44, 48, 52, 56, 60, 64, 72, 80, 96,

  100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,

  320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720,

  760, 800, 840, 880, 920, 960, 1000, 1040, 1080, 1120, 1160,

  1200, 1240, 1280, 1320, 1360, 1400, 1440, 1480, 1520, 1560, 1600,
];

const remsMap = createMap(pxs, (px) => `${px / 10}rem`);
const screenMap = { 'screen-x': '100vw', 'screen-y': '100vh' };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    spacing: { ...remsMap, ...screenMap, auto: 'auto' },
    borderRadius: { ...remsMap, full: '100%' },
    fontSize: { ...remsMap },
    colors: {
      transparent: 'transparent',
      white: {
        DEFAULT: '#ffffff',
        20: '#ffffff33',
      },
      gray: {
        77: '#777777',
      },
      black: {
        DEFAULT: '#000000',
        20: '#00000033',
      },
      primary: '#00ff00',
    },
    extend: {
      maxWidth: { ...remsMap, ...screenMap },
      maxHeight: { ...remsMap, ...screenMap },
      minWidth: { ...remsMap, ...screenMap },
      minHeight: { ...remsMap, ...screenMap },
    },
  },
};
