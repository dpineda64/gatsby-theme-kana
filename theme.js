const { colors, screens } = require('tailwindcss/defaultTheme');

const theme = {
  colors: {
    ...colors,
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    secondaryText: 'var(--secondaryText)',
    primary75: 'var(--primary75)',
  },
  screens: {
    ...screens,
    xxl: '1920px',
  },
};

export default theme;
