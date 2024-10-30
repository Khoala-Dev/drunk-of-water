import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../../theme';
import { styles, themeColor } from './styles';

type TabBarIconProps = {
  focused: boolean;
  icon: string;
  label: string;
  osMode: 'light' | 'dark';
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, icon, label, osMode }) => {
  const focusedIconSize = focused ? 28 : 26;
  const colorIcon = theme[osMode]?.secondary;

  return (
    <View style={styles.icon}>
      <Icon name={icon} color={focused ? colorIcon : theme.grey} size={focusedIconSize} />
      <Text style={themeColor(focused, osMode)}>
        {label}
      </Text>
    </View>
  );
};
``;


export default TabBarIcon;
