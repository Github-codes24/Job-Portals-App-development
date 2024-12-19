import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import EmailVerificationScreen from '../../screen/authScreen/emailVerificationjob/emailVerification';
import jobPhoneVerificationScreen from '../../screen/authScreen/phoneVerificationjob/phoneVerification';
import JobLoginScreen from '../../screen/authScreen/jobLoginScreen/jobLoginScreen';
import SignUpScreen from '../../screen/authScreen/signUpScreen/signUpscreenJob';
import HomeScreen from '../../screen/JobSeeker/homeScreen';
import JobSeekerScreen from '../../screen/JobSeeker/jobSeekerScreen';
import VerifyYourAccountScreen from '../../screen/JobSeeker/verifyYourAccountScreen';
import VerificationSuccessScreen from '../../screen/authScreen/verificationSuccess/verificationSuccesScreen';
import { MainRoutes } from './routeAndParamsList';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainRoutes.HOME_SCREEN}
    screenOptions={{
    headerShown: false, // Hides the header entirely for all screens
  }}
      >
        <Stack.Screen name={MainRoutes.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={MainRoutes.EMAILVERIFICATION_SCREEN} component={EmailVerificationScreen} />
         <Stack.Screen name={MainRoutes.JOBLOGIN_SCREEN} component={JobLoginScreen} />
          <Stack.Screen name={MainRoutes.JOBPHONEVERIFICATION_SCREEN} component={jobPhoneVerificationScreen} />
         <Stack.Screen name={MainRoutes.SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={MainRoutes.VERIFY_YOUR_ACCOUNT_SCREEN} component={VerifyYourAccountScreen} />
        <Stack.Screen name={MainRoutes.JOB_SEEKER_SCREEN} component={JobSeekerScreen} />
          <Stack.Screen name={MainRoutes.VERIFICATION_SUCCESS_SCREEN} component={VerificationSuccessScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
