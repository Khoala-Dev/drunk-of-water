import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Button
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const Target = (): React.JSX.Element => {
  const [target, setTarget] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Defina sua meta diária de consumo de água</Text>
      <TextInput
        style={styles.input}
        placeholder="Text"
        onChangeText={newText => setTarget(newText)}
        defaultValue={target}
      />
      <Button
        onPress={() => {}}
        title="Começar"
        color="#000"
        accessibilityLabel="Começar a sua meta de água diária de água"
      />
    </SafeAreaView>
  );
};

const Progress = (): React.JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Progresso</Text>
      <Button
        onPress={() => {}}
        title="Adicionar"
        color="#000"
        accessibilityLabel="Adicionar um copo de água"
      />
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
    backgroundColor: isDarkMode ? Colors.darker : '#D2FEFF',
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
    fontSize: 25,
    fontWeight: 'regular',
    textAlign: 'left',
  },
  input: {
    height: 40,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
  },
});
