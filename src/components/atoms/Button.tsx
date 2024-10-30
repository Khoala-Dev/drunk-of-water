import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type ButtonProps = {
  onPress: () => void;
  label: string;
  accessibilityText: string;
  disabled?: boolean;
}

const Button = ({ onPress, label, accessibilityText, disabled }: ButtonProps) => {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityText}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.button}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 25,
    height: 60,
    backgroundColor: '#333333',
    color: '#FFF',
    lineHeight: 60,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
});

export default Button;
