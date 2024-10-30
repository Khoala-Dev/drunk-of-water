import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { RootTabParamList } from '../types';
import { Progress, Target } from '../screens';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = (): React.JSX.Element => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Target"
        component={Target}
        options={{
          tabBarLabel: 'Meta',
          tabBarInactiveBackgroundColor: 'withe',
          tabBarIcon: () => <Icon name="compass" size={20} />,
        }}
      />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{
          tabBarLabel: 'Progresso',
          tabBarIcon: () => <Icon name="droplet" size={20} />,
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Tabs;
