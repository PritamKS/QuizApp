import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from './store';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import TabNav from './components/UI/TabNav';
import SubjectwiseQuestionBox from './components/UI/SubjectwiseQuestionBox';
const Stack = createStackNavigator();

export default function App() {
  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubjectwiseQuestionBox"
            component={SubjectwiseQuestionBox}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
