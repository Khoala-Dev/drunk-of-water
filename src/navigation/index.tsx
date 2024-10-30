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
import { useAppTheme } from '../hook';
import theme from '../theme';

type TabBarIconProps = {
  focused: boolean;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = (): React.JSX.Element => {
  const { osTheme } = useAppTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: [
            styles.tabBarStyle,
            { backgroundColor: osTheme === 'dark' ? theme.black : theme.white },
          ],
        }}
      >
        <Tab.Screen
          name="Target"
          component={Target}
          options={{
            tabBarAccessibilityLabel: `${accessibleText.target.tabBar}`,
            tabBarIcon: ({ focused }: TabBarIconProps) => (
              <TabBarIcon focused={focused} icon="compass" label="Meta" osMode={osTheme} />
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
              <TabBarIcon focused={focused} icon="droplet" label="Progresso" osMode={osTheme} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

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

