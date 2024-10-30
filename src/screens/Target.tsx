import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Target = ({ navigation }: NavigationProps): React.JSX.Element => {
  const [target, setTarget] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.generalView}>
        <Text style={styles.text}>Defina sua meta diária de consumo de água</Text>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua meta em ML"
            onChangeText={newText => setTarget(newText)}
            defaultValue={target}
            keyboardType="numeric"
          />
          <Text style={styles.sufix}>{target.length ? 'ml' : ''}</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Progress')} disabled={target.length < 3}>
          <Text style={styles.button}>Começar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

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
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 25,
    flex: 1,
  },
  sufix: {
    fontSize: 25,
    fontWeight: 'regular',
    color: '#000',
    paddingHorizontal: 5,
    textTransform: 'uppercase',
  },
  button: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    height: 60,
    backgroundColor: '#000',
    color: '#FFF',
    lineHeight: 60,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
});

export default Target;
