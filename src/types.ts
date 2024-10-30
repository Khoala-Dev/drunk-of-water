import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Target: undefined;
  Progress: undefined;
};

export type NavigationProps = BottomTabScreenProps<RootTabParamList, 'Target'>;
