/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screen/JobSeeker/homeScreen';
import JobSeekerScreen from './src/screen/JobSeeker/jobSeekerScreen';
import SignUpScreen from './src/screen/authScreen/signUpScreen/signUpscreenJob';
import OtpOptionScreen from './src/screen/JobSeeker/otpOptionScreen';
import ResetPassword from './src/screen/authScreen/forgetPasswordJob/ResetPassword';
import ResetPasswordSuccess from './src/screen/authScreen/forgetPasswordJob/ResetPasswordSuccess';
import ForgetPasswordScreen from './src/screen/authScreen/forgetPasswordJob/ForgetPasswordScreen';
import Stepper from './src/screen/JobSeeker/CompleteYourProfile/Stepper';
import BasicDetailsScreen from './src/screen/JobSeeker/CompleteYourProfile/BasicDetailsScreen';
import EducationDetailsScreen from './src/screen/JobSeeker/CompleteYourProfile/EducationDetailsScreen';
import WorkExperienceScreen from './src/screen/JobSeeker/CompleteYourProfile/WorkExperienceScreen';
// import CompleteYourProfileScreen from './src/screen/JobSeeker/CompleteYourProfile/CompleteYourProfileScreen';

   const App=()=>{
    return(
      <View>
        {/* <OtpOptionScreen/> */}
        {/* <HomeScreen/> */}
        {/* <JobSeekerScreen/> */}
        {/* <SignUpScreen/> */}

        {/* nikhil created screens */}

        {/* <ResetPassword/> */}
        {/* <ResetPasswordSuccess/> */}
        {/* <ForgetPasswordScreen/> */}
        {/* <Stepper/> */}
        {/* <BasicDetailsScreen/> */}
        {/* <EducationDetailsScreen/> */}
        <WorkExperienceScreen/>
      </View>
    )
   }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
