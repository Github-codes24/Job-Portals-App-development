import React from "react";
import { View,Text, StyleSheet,Image,  TouchableOpacity } from "react-native";
import CustomHeader from "../../../reusableComponents/appHeader/customHeader";
import * as Svg from '../../../assets/images/svg';
import VerificationScreen from "../../../reusableComponents/verification/verification";
import { MainRoutes } from "../../../navigation/stackNavigation/routeAndParamsList";


const EmailVerificationScreen=({navigation})=>{
return (
    <View>
        <CustomHeader
        title={'Email Verification'}
        leftIcon={<Svg.ArrowBack/>}
            onLeftPress={()=>navigation.goBack()}
        />
      <VerificationScreen
    onVerify={()=>navigation.navigate(MainRoutes.VERIFICATION_SUCCESS_SCREEN,{type:'email'})}
  subtitle="We’ve sent a verification code to your email."
  emailOrPhone="emailaddress@gmail.com"
  placeholder="Enter Verification Code"
      />
    </View>
)
}

export default EmailVerificationScreen;