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
import DashboardContainer from './screens/Dashboard/DashboardContainer';
import PlayRequestContainer from './screens/PlayRequest/PlayRequestContainer';
import CategoryList from './screens/CategoryList/CategoryList';
import QuizBoxTopic from './components/UI/QuizBoxTopic';
import QuestionListContainer from './screens/QuestionList/QuestionListContainer';
import AllocatedQuestionContainer from './screens/AllocatedQuestion/AllocatedQuestionContainer';
import ResultContainer from './screens/Result/ResultContainer';
import RegistrationContainer from './screens/Registration/RegistrationContainer';

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
            name="DashboardContainer"
            component={DashboardContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Dashboard"
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
          <Stack.Screen
            name="QuestionListContainer"
            component={QuestionListContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AllocatedQuestionContainer"
            component={AllocatedQuestionContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ResultContainer"
            component={ResultContainer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Back to Login!"
            component={RegistrationContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
