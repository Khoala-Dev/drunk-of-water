import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { ios } from '../utils/os';
import Button from '../components/atoms/Button';
import accessibleText from '../accessibility/texts';
import useTheme from '../hooks/useTheme';
import { ThemeColors } from '../types';

const Progress = (): React.JSX.Element => {
  const { theme } = useTheme();
  const {
    container,
    generalView,
    text,
  } = styles(theme);

  return (
    <SafeAreaView style={[container ]}>
      <View style={generalView}>
        <Text style={text}>Progresso</Text>
        <Button
          accessibilityText={accessibleText.progress.pressableLabel}
          onPress={() => { }}
          label="Adicionar"
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
    color: '#333',
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
});

export default Progress;
