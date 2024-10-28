import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Target = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Meta Diária</Text>
    </SafeAreaView>
  );
};

const Progress = (): React.JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Progresso</Text>
    </SafeAreaView>
  );
};

const Navigation = (): React.JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Meta Diária" component={Target} />
      <Tab.Screen name="Progresso" component={Progress} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
