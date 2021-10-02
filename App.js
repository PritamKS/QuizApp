import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import store from './store';
import OnBoarding from './screens/OnBoarding/OnBoarding';
import TabNav from './components/UI/TabNav';
import SubCategoryContainer from './screens/SubCategoriesScreen/SubCategoryContainer';
import LoginContainer from './screens/Login/LoginContainer';
import OtpVerificationContainer from './screens/OTPVerification/OtpVerificationContainer';
import dashboardContainer from './screens/Dashboard/dashboardContainer';
import PlayRequestContainer from './screens/PlayRequest/PlayRequestContainer';
import CategoryList from './screens/CategoryList/CategoryList';
import QuizBoxTopic from './components/UI/QuizBoxTopic';
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
            name="dashboardContainer"
            component={dashboardContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SubCategoryContainer"
            component={SubCategoryContainer}
            options={{headerShown: true}}
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
            name="PlayRequestContainer"
            component={PlayRequestContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CategoryList"
            component={CategoryList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="QuizBoxTopic"
            component={QuizBoxTopic}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
