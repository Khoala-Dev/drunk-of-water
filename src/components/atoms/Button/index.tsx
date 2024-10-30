import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  onPress: () => void;
  label: string;
  accessibilityText: string;
  disabled?: boolean;
  osMode: 'light' | 'dark';
}

const Button = ({ onPress, label, accessibilityText, disabled, osMode }: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityText}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.button, styles[osMode]]}>{label}</Text>
    </Pressable>
  );
};

export default Button;
