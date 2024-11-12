import React, { useEffect, useState } from 'react';
import { NavigationProps, ThemeColors } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import accessibleText from '../accessibility/texts';
import { ios } from '../utils/os';
import Button from '../components/atoms/Button';
import useTheme from '../hooks/useTheme';
import { getTarget, storeTarget } from '../storage/target';

const Target = ({ navigation }: NavigationProps): React.JSX.Element => {
  const { theme } = useTheme();
  const {
    container,
    generalView,
    text,
    inputBox,
    input,
    sufix,
  } = styles(theme);

  const [target, setTarget] = useState('');

  const readTargetFromStorage = async () => {
    const storedTarget = await getTarget();
    setTarget(storedTarget.target);
  };

  const writeTargetToStorage = async () => {
    await storeTarget({target: target});
    await navigation.navigate('Progress');
  };

  useEffect(() => {
    readTargetFromStorage();
  }, []);

  return (
    <SafeAreaView style={container}>
      <View style={generalView}>
        <Text style={text}>Defina sua meta diária de consumo de água</Text>
        <View style={inputBox}>
          <TextInput
            accessibilityLabel={accessibleText.target.input}
            style={input}
            placeholder="Digite sua meta em ML"
            onChangeText={newTarget => setTarget(newTarget)}
            defaultValue={target}
            keyboardType="numeric"
          />
          <Text style={sufix}>{target.length ? 'ml' : ''}</Text>
        </View>
        <Button
          accessibilityText={accessibleText.target.pressableLabel}
          onPress={() => writeTargetToStorage()}
          label="Começar"
          disabled={target.length < 3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: ios ? 80 : 100,
    backgroundColor: theme.primary,
  },
  generalView: {
    gap: 20,
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'regular',
    textAlign: 'left',
    color: theme.text,
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
