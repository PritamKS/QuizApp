import 'react-native-gesture-handler';
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../../screens/dashboard/dashboard';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'white',
          showLabel: false,
          style: {
            backgroundColor: '#0066cc'
          },
          tabBarOnPress: ({ navigation, defaultHandler }) => {
            if (navigation.isFocused()) {
              alert('subsequent focus');
              return;
            } else {
              alert('focused');
            }
            defaultHandler();
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={Dashboard}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} type="entypo"/>
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack"
          component={Dashboard}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="bandcamp"
                color={color}
                size={size} type="entypo"
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack1"
          component={Dashboard}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="comment"
                color={color}
                size={size} type="entypo"
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack2"
          component={Dashboard}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="bell"
                color={color}
                size={size} type="entypo"
              />
            ),
          }}
        />
        <Tab.Screen
          name="SettingsStack3"
          component={Dashboard}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="user"
                color={color}
                size={size} type="entypo"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNav
