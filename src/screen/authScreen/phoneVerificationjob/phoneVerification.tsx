import React from "react";
import { View,Text, StyleSheet,Image,  TouchableOpacity } from "react-native";
import CustomHeader from "../../../reusableComponents/appHeader/customHeader";
import * as Svg from '../../../assets/images/svg';
import VerificationScreen from "../../../reusableComponents/verification/verification";


const PhoneVerification=()=>{
return (
    <View>
        <CustomHeader
               title={'Phone Verification'}
               leftIcon={<Svg.ArrowBack/>}
               />
      <VerificationScreen 
  subtitle="We’ve sent a verification code to your email."
  emailOrPhone="9155071885"
  placeholder="Enter Verification Code"
      />
    </View>
)
}

export default PhoneVerification;