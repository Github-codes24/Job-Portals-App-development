import React from "react";
import { View,Text, StyleSheet } from "react-native";
import CustomHeader from "../../reusableComponents/appHeader/customHeader";
import { String } from "../../utils/string";

import * as Svg from '../../assets/images/svg';
import { theme } from "../../utils";
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
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-between',width:130,marginTop:20}}>
         <Svg.MobileIcon/>
         <Text>{'9155074742'}</Text>
         <Svg.Edit/>
          </View>
       </View>
       </View>
    </View>
)
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1, // Ensure the main view takes up full height
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
    marginTop:theme.verticalSpacing.space_50
  }
});
export default OtpOptionScreen;