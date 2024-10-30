/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, ThemeColors } from '../types';
import { Progress, Target } from '../screens';
import accessibleText from '../accessibility/texts';
import TabBarIcon from '../components/atoms/TabBarIcon';
import { ios } from '../utils/os';
import { StyleSheet } from 'react-native';
import useTheme from '../hooks/useTheme';

interface TabBarIconProps {
  focused: boolean;
}

const Tabs = (): React.JSX.Element => {
  const { theme } = useTheme();
  const { tabBarStyle } = styles(theme);
  const Tab = createBottomTabNavigator<RootTabParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: tabBarStyle,
        }}
      >
        <Tab.Screen
          name="Target"
          component={Target}
          options={{
            tabBarAccessibilityLabel: `${accessibleText.target.tabBar}`,
            tabBarIcon: ({ focused }: TabBarIconProps) => (
              <TabBarIcon focused={focused} icon="compass" label="Meta" />
            ),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            tabBarLabel: 'Progresso',
            tabBarAccessibilityLabel: `${accessibleText.progress.tabBar}`,
            tabBarIcon: ({ focused }: TabBarIconProps) => (
              <TabBarIcon focused={focused} icon="droplet" label="Progresso" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = (theme: ThemeColors) => StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom:  ios ? 30 : 20,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 70,
    paddingBottom: 0,
    backgroundColor: theme.backgroundTab,
  },
});

export default Tabs;

