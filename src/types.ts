import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { ColorValue } from 'react-native';

export interface ThemeColors {
  primary: ColorValue;
  secondary: ColorValue;
  text: ColorValue;
  grey: ColorValue;
  backgroundTab: ColorValue;
  buttonText: ColorValue;
  backgroundButton: ColorValue;
  backgroundGlass: ColorValue,
  colorWater: ColorValue;
}

export interface Theme {
  light: ThemeColors;
  dark: ThemeColors;
}

export type RootTabParamList = {
  Target: undefined;
  Progress: undefined;
};

export type NavigationProps = BottomTabScreenProps<RootTabParamList, 'Target'>;
