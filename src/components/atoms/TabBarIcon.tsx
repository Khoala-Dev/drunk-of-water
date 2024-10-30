import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ios } from '../../utils/os';

type TabBarIconProps = {
  focused: boolean;
  icon: string;
  label: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, icon, label }) => {
  const iconColor = focused ? '#FFDDAE' : 'grey';
  const textStyle = focused ? styles.focusedText : styles.defaultText;

  return (
    <View style={styles.icon}>
      <Icon name={icon} color={iconColor} size={ios ? 28 : 25} />
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedText: {
    color: '#FFDDAE',
    fontWeight: '600',
  },
  defaultText: {
    color: 'grey',
  },
});

export default TabBarIcon;
