import { Theme } from '../types';

const colors = {
  'light-blue': '#D1FFFA',
  'dark-blue': '#006156',
  'white': '#FFFFFF',
  'black': '#333333',
  'dark-grey': '#595959',
  'light-grey': '#C2C2C2',
  'water': '#0BD9F4',
}

const theme: Theme = {
  light: {
    primary: colors['light-blue'],
    secondary: colors['dark-blue'],
    text: colors.black,
    grey: colors['dark-grey'],
    backgroundTab: colors.white,
    buttonText: colors.white,
    backgroundButton: colors.black,
    backgroundGlass: colors.white,
    colorWater: colors.water,
  },
  dark: {
    primary: colors['dark-blue'],
    secondary: colors['light-blue'],
    text: colors.white,
    grey: colors['light-grey'],
    backgroundTab: colors.black,
    buttonText: colors.black,
    backgroundButton: colors.white,
    backgroundGlass: colors.black,
    colorWater: colors.water,
  },
};

export default theme;
