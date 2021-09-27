import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from './store';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import TabNav from './components/UI/TabNav';
import SubjectwiseQuestionBox from './components/UI/SubjectwiseQuestionBox';
import LoginContainer from './screens/Login/LoginContainer';
import OtpVerificationContainer from './screens/OTPVerification/OtpVerificationContainer';
import dashboardContainer from './screens/Dashboard/dashboardContainer';
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
            name="SubjectwiseQuestionBox"
            component={SubjectwiseQuestionBox}
          />
          <Stack.Screen
            name="TabNav"
            component={TabNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginContainer"
            component={LoginContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OtpVerificationContainer"
            component={OtpVerificationContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="dashboardContainer"
            component={dashboardContainer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
