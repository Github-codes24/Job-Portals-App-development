import React from "react";
import { View,Text, StyleSheet, TouchableNativeFeedbackComponent, TouchableOpacity } from "react-native";
import CustomHeader from "../../reusableComponents/appHeader/customHeader";
import { String } from "../../utils/string";

import * as Svg from '../../assets/images/svg';
import { theme } from "../../utils";
import CustomButton from "../../reusableComponents/button/button";
const OtpOptionScreen=()=>{
return(
    <View style={styles.main}>
        <CustomHeader
        title={String.verifyOtp}
        leftIcon={<Svg.ArrowBack/>}
        />
        <View style={styles.otpmainView}>
       <Text style={styles.text}>{'Where should we send your verification code?'}</Text>
       <View style={styles.mobileView}>
          <View>
            <View style={{flexDirection:"row",marginTop:20,justifyContent:"center",alignItems:"center"}}>
         <Svg.MobileIcon/>
         <Text style={styles.numberStyle}>{'9155074742'}</Text>
         <TouchableOpacity>
         <Svg.Edit/>
         </TouchableOpacity>

        
         </View>
       <TouchableOpacity style={styles.selectPhoneButton}>
           <Text style={styles.textStyle}>Select phone</Text>
         </TouchableOpacity>
          </View>
       </View>
         <View style={[styles.mobileView,{marginTop:theme.verticalSpacing.space_76}]}>
        <View>
            <View style={{flexDirection:"row",marginTop:20,justifyContent:"center",alignItems:"center"}}>
         <Svg.MailIcon/>
         <Text style={styles.numberStyle}>{'vkr@gmail.com'}</Text>
         <TouchableOpacity>
         <Svg.Edit/>
         </TouchableOpacity>

        
         </View>
       <TouchableOpacity style={styles.selectPhoneButton}>
           <Text style={styles.textStyle}>Select Email</Text>
         </TouchableOpacity>
          </View>
       </View>
       <View style={styles.makeSureView}>
    <Text style={styles.makeSureText}>{'Make sure you have access to your selected option to receive the code.'}</Text>
</View>
<CustomButton
title={String.createAccount}
/>
</View>
    
       
    </View>
)
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
   
  },
  otpmainView: {
    width: '100%',
    height: '90%',
    alignItems: 'center', 
    marginTop:theme.verticalSpacing.space_30
  },
  text: {
    fontSize: 16,
    textAlign: 'center', 
    color:theme.lightColor.gray, 
  },
  mobileView:{
    width:theme.horizontalSpacing.space_260,
    height:theme.verticalSpacing.space_136,
    borderWidth:1,
    borderColor:theme.lightColor.purple,
    borderRadius:10,
    marginTop:theme.verticalSpacing.space_50,
    alignItems:"center"
  },
  numberStyle:{
    marginHorizontal:theme.horizontalSpacing.space_12,
    fontSize:theme.fontSizes.size_16,
    color:theme.lightColor.gray
  },
    selectPhoneButton:{
      width:theme.horizontalSpacing.space_187,
      backgroundColor:theme.lightColor.purple,
      height:theme.verticalSpacing.space_40,
      alignItems:"center",
      justifyContent:'center',
      borderRadius:10,
      marginTop:theme.verticalSpacing.space_20
    },
    textStyle:{
      color:'white',
      fontWeight:'500'
    },
    makeSureView:{
      width:theme.horizontalSpacing.space_370,
      padding:15,
      margin:15,
      justifyContent:"center",
      alignItems:"center",
   },
makeSureText:{
color:theme.lightColor.gray,
textAlign:"center"
}
});
export default OtpOptionScreen;