import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    height: 60,
    lineHeight: 60,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  light: {
    color: theme.white,
    backgroundColor: theme.black,
  },
  dark: {
    color: theme.black,
    backgroundColor: theme.white,
  },
});