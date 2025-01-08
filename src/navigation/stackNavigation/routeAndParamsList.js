import { createStackNavigator } from '@react-navigation/stack';


export const MainRoutes = {
  // SPLASH_SCREEN: 'SplashScreen',
  HOME_SCREEN:'HomeScreen',
  JOBLOGIN_SCREEN: 'JobLoginScreen',
   OTP_OPTION_SCREEN:'OtpOptionScreen',
  DASHBOARD_SCREEN: 'DashboardScreen',
   EMAILVERIFICATION_SCREEN:'EmailVerificationScreen',
   JOBPHONEVERIFICATION_SCREEN:'jobPhoneVerificationScreen',
   SIGN_UP_SCREEN:'SignUpScreen',
  VERIFICATION_SUCCESS_SCREEN:'VerificationSuccessScreen',
   VERIFY_YOUR_ACCOUNT_SCREEN:'VerifyYourAccountScreen',
   JOB_SEEKER_SCREEN:'JobSeekerScreen',
   FOREGETTPASSWORD_SCREEN:'ForgetPasswordScreen',
   RESETPASSWORD:'ResetPassword',
   RESETPASSWORD_SUCCESS:'ResetPasswordSuccess',
   BASIC_DETAILS:'BasicDetails',
   EDUCATION_DETAILS:'EducationDetails',
   WORKEXPERIENCE_DETAILS:'WorkExperienceDetails',
   CERTIFICATION_DETAILS: 'CertificationDetails',
   SKILLS_AND_PREFERANCES: 'SkillsAndPreferances',
   UPLOAD_DOCUMENTS: 'UploadDocuments',
   YOU_ARE_ALL_SET: 'YouAreAllSet',
   JOB_DASHBOARD_SCREEN:'jobDashboardScreen',
 EDUCATION_DETAILS_SCREEN:'EducationDetailsScreen',
 BASIC_DETAILS_SCREEN:'BasicDetailsScreen',
 WORK_EXPERIENCE_SCREEN:'WorkExperienceScreen',
 BROWSE_JOB_CANDIDATE_SCREEN:'BrowseJobCandidateScreen',
 BROWSE_JOB_CANDIDATE_FILTER_SCREEN:'BrowseJobCandidateFilterScreen',
};

export const RootStackParamList = {
  // [MainRoutes.SPLASH_SCREEN]:{}| undefined,
   [MainRoutes.HOME_SCREEN]: {}|undefined,
  [MainRoutes.JOBLOGIN_SCREEN]:{}| undefined,
  [MainRoutes.DASHBOARD_SCREEN]: {}|undefined,
   [MainRoutes.EMAILVERIFICATION_SCREEN]: {}|undefined,
    [MainRoutes.JOBPHONEVERIFICATION_SCREEN]: {}|undefined,
    [MainRoutes.SIGN_UP_SCREEN]: {}|undefined,
     [MainRoutes.VERIFICATION_SUCCESS_SCREEN]: {}|undefined,
    [MainRoutes.FOREGETTPASSWORD_SCREEN]: {}|undefined,
    [MainRoutes.RESETPASSWORD]: {}|undefined,
    [MainRoutes.RESETPASSWORD_SUCCESS]: {}|undefined,
    [MainRoutes.BASIC_DETAILS]: {}|undefined,
    [MainRoutes.EDUCATION_DETAILS]: {}|undefined,
    [MainRoutes.WORKEXPERIENCE_DETAILS]: {}|undefined,
    [MainRoutes.CERTIFICATION_DETAILS]: {}|undefined,
    [MainRoutes.SKILLS_AND_PREFERANCES]: {}|undefined,
    [MainRoutes.UPLOAD_DOCUMENTS]: {}|undefined,
    [MainRoutes.YOU_ARE_ALL_SET]: {}|undefined,
     [MainRoutes.JOB_DASHBOARD_SCREEN]: {}|undefined,
    [MainRoutes.EDUCATION_DETAILS_SCREEN]: {}|undefined,
    [MainRoutes.BASIC_DETAILS_SCREEN]: {}|undefined,
      [MainRoutes.WORK_EXPERIENCE_SCREEN]: {}|undefined,
      [MainRoutes.BROWSE_JOB_CANDIDATE_SCREEN]: {}|undefined,
      [MainRoutes.BROWSE_JOB_CANDIDATE_FILTER_SCREEN]: {}|undefined,
   
};

export const MainStack = createStackNavigator();
export const useNavType = {
  navigate: () => {}, 
};
