import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Pressable,
  View,
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
      <View style={styles.generalView}>
        <Text style={styles.text}>Defina sua meta diária de consumo de água</Text>
        <TextInput
          style={styles.input}
          placeholder="Text"
          onChangeText={newText => setTarget(newText)}
          defaultValue={target}
        />
        <Pressable onPress={() => {}}>
          <Text style={styles.button}>Começar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const Progress = (): React.JSX.Element => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.generalView}>
        <Text style={styles.text}>Progresso</Text>
        <Pressable onPress={() => {}}>
        <Text style={styles.button}>Adicionar</Text>
        </Pressable>
      </View>
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
    justifyContent: 'flex-end',
    backgroundColor: '#D2FEFF',
  },
  generalView: {
    gap: 20,
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'regular',
    textAlign: 'left',
  },
  input: {
    height: 60,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    height: 60,
    backgroundColor: '#000',
    color: '#FFF',
    lineHeight: 60,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'flex-start',
  },
});

