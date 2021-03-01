/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {GoogleSignin} from '@react-native-community/google-signin';

import DummyScreen from './screens/Dummy';
import LoginPage from './screens/LoginPage';
import SignUpScreen from './screens/Signup';
import StudentScreen from './screens/Student';
import CompanyScreen from './screens/Company';
import FormikForm from './screens/form';

import store from './redux-config/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1013517656141-k2befn4fo1obhhg1j9e78vuoj2nqa21f.apps.googleusercontent.com',
    });
  }, []);
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Login" component={LoginPage} />
              <Stack.Screen name="Form" component={FormikForm} />
              <Stack.Screen name="Signup" component={SignUpScreen} />
              <Stack.Screen name="Students" component={StudentScreen} />
              <Stack.Screen name="Companies" component={CompanyScreen} />
              <Stack.Screen name="Dummy" component={DummyScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
