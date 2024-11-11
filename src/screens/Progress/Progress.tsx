import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { ios } from '../../utils/os';
import Button from '../../components/atoms/Button';
import accessibleText from '../../accessibility/texts';
import useTheme from '../../hooks/useTheme';
import { ThemeColors } from '../../types';
import Glass from '../../components/atoms/Glass';
import { getConsumption, storeConsumptiom } from '../../storage/consumption';
import { getWaterHeight } from './helpers/getWaterHeight';

const Progress = (): React.JSX.Element => {
  const { theme } = useTheme();
  const {
    container,
    generalView,
  } = styles(theme);

  const [consumption, setConsumption] = useState(0);
  const [waterHeight, setWaterHeight] = useState(0);

  const glassHeight = 300;
  const defaultConsumption = 250;

  const readConsumptionFromStorage = async () => {
    const storedTarget = await getConsumption();
    setConsumption(storedTarget.consumption);
  };

  const writeConsumptionToStorage = async () => {
    const newConsumption = {consumption: consumption + defaultConsumption};
    await storeConsumptiom(newConsumption);
    setConsumption(newConsumption.consumption);
    defineWaterHeight();
  };

  const zeroConsumptionToStorage = async () => {
    await storeConsumptiom({consumption: 0});
    setConsumption(0);
    defineWaterHeight();
  };

  const defineWaterHeight = async () => {
    const gettedWaterHeight = await getWaterHeight(glassHeight);
    setWaterHeight(gettedWaterHeight);
  };

  useEffect(() => {
    readConsumptionFromStorage();
    defineWaterHeight();
  }, []);

  return (
    <SafeAreaView style={[container ]}>
      <View style={generalView}>
        <Glass glassHeight={glassHeight} waterHeight={waterHeight} />
        <Text>{consumption}</Text>
        <Button
          accessibilityText={accessibleText.progress.pressableLabel}
          onPress={() => writeConsumptionToStorage()}
          label="Adicionar 250ml"
        />

      <Button accessibilityText={accessibleText.progress.pressableLabel} onPress={() => zeroConsumptionToStorage()}
          label="Zerar"/>
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
});

export default Progress;
