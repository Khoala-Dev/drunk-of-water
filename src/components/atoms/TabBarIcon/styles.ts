import { StyleSheet } from 'react-native';
import theme from '../../../theme';
import { ThemeKeys } from '../../../types';

type ThemeColor = {
  color: string;
  fontWeight: 'bold' | 'normal';
}

export const themeColor = (focused: boolean, osTheme: ThemeKeys): ThemeColor  => focused
  ? { color: theme[osTheme]?.secondary, fontWeight: 'bold' }
  : { color: theme.grey, fontWeight: 'normal' };

export const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightIcon: {
    color: theme.light.secondary,
  },
  darkIcon: {
    color: theme.dark.secondary,
  },
  focus: {
    fontWeight: 'bold',
  }
});