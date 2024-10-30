import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useTheme from '../../hooks/useTheme';
import { ThemeColors } from '../../types';

type TabBarIconProps = {
  focused: boolean;
  icon: string;
  label: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, icon, label }) => {
  const { theme } = useTheme();
  const { container, focus, blur } = styles(theme);

  return (
    <View style={container}>
      <Icon
        name={icon}
        size={focused ? 28 : 26}
        color={focused ? theme.secondary : theme.grey}
      />
      <Text style={focused ? focus : blur}>
        {label}
      </Text>
    </View>
  );
};


const styles = (theme: ThemeColors) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  focus: {
    fontWeight: 'bold',
    color: theme.secondary,
  },
  blur: {
    color: theme.grey,
  },
});

export default TabBarIcon;