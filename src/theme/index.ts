import { Theme } from '../types';

const colors = {
  'light-blue': '#D1FFFA',
  'dark-blue': '#006156',
  'white': '#FFFFFF',
  'black': '#333333',
  'light-grey': '#595959',
  'dark-grey': '#C2C2C2',
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
  },
  dark: {
    primary: colors['dark-blue'],
    secondary: colors['light-blue'],
    text: colors.white,
    grey: colors['light-grey'],
    backgroundTab: colors.black,
    buttonText: colors.black,
    backgroundButton: colors.white,
  },
};

export default theme;
