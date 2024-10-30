import { useColorScheme } from 'react-native';

const useAppTheme = () => {
  const osTheme = useColorScheme() || 'light';

  return {
    osTheme,
  };

};

export default useAppTheme;
