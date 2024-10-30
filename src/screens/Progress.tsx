import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import accessibleText from '../accessibility/texts';
import { ios } from '../utils/os';


const Progress = (): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.generalView}>
        <Text style={styles.text}>Progresso</Text>
        <Pressable
          onPress={() => {}}
          accessibilityLabel={accessibleText.progress.pressableLabel}
        >
          <Text style={styles.button}>Adicionar</Text>
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

export default Progress;
