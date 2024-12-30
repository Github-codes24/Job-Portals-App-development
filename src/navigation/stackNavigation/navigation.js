import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainRoutes } from './routeAndParamsList';
import BottomTabNavigator from '../bottomTab/bottomTab';
import EmailVerificationScreen from '../../screen/authScreen/emailVerificationjob/emailVerification';
import jobPhoneVerificationScreen from '../../screen/authScreen/phoneVerificationjob/phoneVerification';
import JobLoginScreen from '../../screen/authScreen/jobLoginScreen/jobLoginScreen';
import SignUpScreen from '../../screen/authScreen/signUpScreen/signUpscreenJob';
import HomeScreen from '../../screen/JobSeeker/homeScreen';
import JobSeekerScreen from '../../screen/JobSeeker/jobSeekerScreen';
import VerifyYourAccountScreen from '../../screen/JobSeeker/verifyYourAccountScreen';
import VerificationSuccessScreen from '../../screen/authScreen/verificationSuccess/verificationSuccesScreen';
import ForgetPasswordScreen from '../../screen/authScreen/forgetPasswordJob/ForgetPasswordScreen';
import ResetPasswordSuccess from '../../screen/authScreen/forgetPasswordJob/ResetPasswordSuccess';
import ResetPassword from '../../screen/authScreen/forgetPasswordJob/ResetPassword';
import BasicDetailsScreen from '../../screen/JobSeeker/CompleteYourProfile/BasicDetailsScreen';
import EducationDetailsScreen from '../../screen/JobSeeker/CompleteYourProfile/EducationDetailsScreen';
import WorkExperienceScreen from '../../screen/JobSeeker/CompleteYourProfile/WorkExperienceScreen';
import CertificationScreen from '../../screen/JobSeeker/CompleteYourProfile/CertificationScreen';
import SkillsAndPreferencesScreen from '../../screen/JobSeeker/CompleteYourProfile/SkillsAndPreferencesScreen';
import UploadDocumentsScreen from '../../screen/JobSeeker/CompleteYourProfile/UploadDocumentsScreen';
import YouAreAllSetScreen from '../../screen/JobSeeker/CompleteYourProfile/YouAreAllSetScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainRoutes.HOME_SCREEN}
      screenOptions={{
        headerShown: false, // Hides the header entirely for all screens
      }}
    >
      <Stack.Screen name={MainRoutes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={MainRoutes.JOB_DASHBOARD_SCREEN}
        component={BottomTabNavigator} // Use Tab Navigator here
      />
      <Stack.Screen name={MainRoutes.EMAILVERIFICATION_SCREEN} component={EmailVerificationScreen} />
      <Stack.Screen name={MainRoutes.JOBLOGIN_SCREEN} component={JobLoginScreen} />
      <Stack.Screen name={MainRoutes.JOBPHONEVERIFICATION_SCREEN} component={jobPhoneVerificationScreen} />
      <Stack.Screen name={MainRoutes.SIGN_UP_SCREEN} component={SignUpScreen} />
      <Stack.Screen name={MainRoutes.VERIFY_YOUR_ACCOUNT_SCREEN} component={VerifyYourAccountScreen} />
      <Stack.Screen name={MainRoutes.VERIFICATION_SUCCESS_SCREEN} component={VerificationSuccessScreen} />
      <Stack.Screen name={MainRoutes.FOREGETTPASSWORD_SCREEN} component={ForgetPasswordScreen} />
      <Stack.Screen name={MainRoutes.RESETPASSWORD} component={ResetPassword} />
      <Stack.Screen name={MainRoutes.RESETPASSWORD_SUCCESS} component={ResetPasswordSuccess} />
      <Stack.Screen name={MainRoutes.BASIC_DETAILS_SCREEN} component={BasicDetailsScreen} />
      <Stack.Screen name={MainRoutes.EDUCATION_DETAILS_SCREEN} component={EducationDetailsScreen} />
      <Stack.Screen name={MainRoutes.WORK_EXPERIENCE_SCREEN} component={WorkExperienceScreen} />
      <Stack.Screen name={MainRoutes.CERTIFICATION_DETAILS} component={CertificationScreen} />
      <Stack.Screen name={MainRoutes.SKILLS_AND_PREFERANCES} component={SkillsAndPreferencesScreen} />
      <Stack.Screen name={MainRoutes.UPLOAD_DOCUMENTS} component={UploadDocumentsScreen} />
      <Stack.Screen name={MainRoutes.YOU_ARE_ALL_SET} component={YouAreAllSetScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
