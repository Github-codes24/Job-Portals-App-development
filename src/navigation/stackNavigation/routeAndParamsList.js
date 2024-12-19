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
   RESETPASSWORD_SUCCESS:'ResetPasswordSuccess'
 
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
   
};

export const MainStack = createStackNavigator();
export const useNavType = {
  navigate: () => {}, 
};
