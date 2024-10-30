/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types';
import { Progress, Target } from '../screens';
import accessibleText from '../accessibility/texts';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../components/atoms/TabBarIcon';
import { ios } from '../utils/os';

type TabBarIconProps = {
  focused: boolean;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = (): React.JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
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

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom:  ios ? 30 : 20,
    left: 20,
    right: 20,
    elevation: 0, // isso tira o box-shadow default do Android
    borderRadius: 15,
    height: 70,
    paddingBottom: 0,
  },
});

export default Tabs;

