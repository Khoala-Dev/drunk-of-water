import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './src/navigation';
import useTheme from './src/hooks/useTheme';

export default function App(): React.JSX.Element {
  const { theme, colorScheme } = useTheme();

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.primary}
      />
      <Tabs />
    </SafeAreaProvider>
  );
}
