import { useColorScheme } from 'react-native';
import theme from '../theme';

const useTheme = () => {
  const colorScheme = useColorScheme() || 'light';

  return { theme: theme[colorScheme], colorScheme };
};

export default useTheme;
