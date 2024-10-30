import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import useTheme from '../../hooks/useTheme';
import { ThemeColors } from '../../types';

type ButtonProps = {
  onPress: () => void;
  label: string;
  accessibilityText: string;
  disabled?: boolean;
}

const Button = ({
  onPress,
  label,
  disabled,
  accessibilityText,
}: ButtonProps) => {
  const { theme } = useTheme();
  const { button, text } = styles(theme);

  return (
    <Pressable
      style={button}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityText}
    >
      <Text style={text}>{label}</Text>
    </Pressable>
  );
};

const styles = (theme: ThemeColors) => StyleSheet.create({
  button: {
    height: 60,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundButton,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25,
    textTransform: 'uppercase',
    lineHeight: 60,
    color: theme.buttonText,
  },
});

export default Button;
