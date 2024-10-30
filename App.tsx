import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Tabs from './src/navigation';
import { useAppTheme } from './src/hook';
import theme from './src/theme';

export default function App(): React.JSX.Element {
  const { osTheme } = useAppTheme();

  const backgroundStyle = {
    backgroundColor: osTheme === 'dark' ? theme.darkBlue : theme.lightBlue,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={osTheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Tabs />
    </SafeAreaProvider>
  );
}
