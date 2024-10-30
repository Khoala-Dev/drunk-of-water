import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import accessibleText from '../accessibility/texts';
import { ios } from '../utils/os';
import Button from '../components/atoms/Button';
import { useAppTheme } from '../hook';
import theme from '../theme';

const Target = ({ navigation }: NavigationProps): React.JSX.Element => {
  const { osTheme } = useAppTheme();

  const [target, setTarget] = useState('');
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme[osTheme].primary }]}>
      <View style={styles.generalView}>
        <Text style={[styles.text, { color: theme[osTheme].text }]}>Defina sua meta diária de consumo de água</Text>
        <View style={styles.inputBox}>
          <TextInput
            accessibilityLabel={accessibleText.target.input}
            style={styles.input}
            placeholder="Digite sua meta em ML"
            onChangeText={newText => setTarget(newText)}
            defaultValue={target}
            keyboardType="numeric"
          />
          <Text style={styles.sufix}>{target.length ? 'ml' : ''}</Text>
        </View>
        <Button
          accessibilityText={accessibleText.target.pressableLabel}
          onPress={() => navigation.navigate('Progress')}
          label="Começar"
          disabled={target.length < 3}
          osMode={osTheme}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: ios ? 80 : 100,
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
    borderWidth: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  input: {
    fontSize: 25,
    flex: 1,
  },
  sufix: {
    fontSize: 25,
    fontWeight: 'regular',
    color: '#333',
    paddingHorizontal: 5,
    textTransform: 'uppercase',
  },
});

export default Target;
