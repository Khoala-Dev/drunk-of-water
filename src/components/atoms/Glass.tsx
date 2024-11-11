import React from 'react';
import { View, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { ThemeColors } from '../../types';

type GlassProps = {
    glassHeight: number,
    waterHeight: number
}

const Glass = ({glassHeight, waterHeight}: GlassProps) => {
  const { theme } = useTheme();
  const { glass, water } = styles(theme);

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
