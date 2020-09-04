import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';


import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: 'AIzaSyDx-zBbO2MLIy1xXtVLRfFUIWLl3LOhZZc',
  authDomain: 'test-392e0.firebaseapp.com',
  databaseURL: 'https://test-392e0.firebaseio.com',
  projectId: 'test-392e0',
  storageBucket: 'test-392e0.appspot.com',
  messagingSenderId: '534738311081',
  appId: '1:534738311081:web:bacb89fe677574d94216b8',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  ForgotPassword: ForgotPasswordScreen,
  
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
