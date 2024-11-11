import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { ThemeColors } from '../../types';
import { getTarget } from '../../storage/target';
import { getConsumption } from '../../storage/consumption';

const Glass = () => {
  const { theme } = useTheme();
  const { glass, water } = styles(theme);

  const [waterHeight, setWaterHeight] = useState(0);
  const glassHeight = 300;

  useEffect(() => {
    const defineWaterHeight = async () => {
        const storedTarget = await getTarget();
        const storedConsumption = await getConsumption();
        const waterHeightCalc = (storedConsumption.consumption * glassHeight) / storedTarget.target;
        setWaterHeight(waterHeightCalc);
      };

    defineWaterHeight();
  }, []);

  return (
    <View style={[glass, { height: glassHeight}]}>
        <View style={[ water, { height: waterHeight }]} />
    </View>
  );
};

const styles = (theme: ThemeColors) => StyleSheet.create({
    glass: {
        width: 200,
        backgroundColor: theme.backgroundGlass,
        alignSelf: 'center',
        marginBottom: 20,
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    water: {
        backgroundColor: theme.colorWater,
    },
});

export default Glass;
