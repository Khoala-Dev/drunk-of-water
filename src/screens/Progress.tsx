import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { ios } from '../utils/os';
import Button from '../components/atoms/Button';
import accessibleText from '../accessibility/texts';
import { useAppTheme } from '../hook';
import theme from '../theme';


const Progress = (): React.JSX.Element => {
  const { osTheme } = useAppTheme();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme[osTheme].primary }]}>
      <View style={styles.generalView}>
        <Text style={styles.text}>Progresso</Text>
        <Button
          accessibilityText={accessibleText.progress.pressableLabel}
          onPress={() => { }}
          label="Adicionar"
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
    color: '#333',
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
});

export default Progress;
