import { createStackNavigator } from '@react-navigation/stack';


export const MainRoutes = {
  SPLASH_SCREEN: 'SplashScreen',
  LOGIN_SCREEN: 'LoginScreen',
  VERIFY_OTP_SCREEN: 'VerifyOtpScreen',
  DASHBOARD_SCREEN: 'DashboardScreen',
 
};

export const RootStackParamList = {
  [MainRoutes.SPLASH_SCREEN]:{}| undefined,
  [MainRoutes.LOGIN_SCREEN]:{}| undefined,
  [MainRoutes.VERIFY_OTP_SCREEN]:{}| undefined,
  [MainRoutes.DASHBOARD_SCREEN]: {}|undefined,
 
};

export const MainStack = createStackNavigator();
export const useNavType = {
  navigate: () => {}, 
};
