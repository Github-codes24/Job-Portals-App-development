import React,{useState} from "react";
import { View,Text, StyleSheet, Touchable, TouchableOpacity } from "react-native";
import CustomHeader from "../../../reusableComponents/appHeader/customHeader";
import CustomTextInput from "../../../reusableComponents/customTextInput/customTextInput";
import CustomButton from "../../../reusableComponents/button/button";
import { String } from "../../../utils/";
import {theme} from '../../../utils'
import CheckBox from "@react-native-community/checkbox";
import * as Svg from '../../../assets/images/svg';


const SignUpScreen=()=>{
const [password, setPassword] = useState('');
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
const [isChecked, setIsChecked] = useState(false);
    


const handlePasswordChange = (input) => {
    setPassword(input);
    setIsValidLength(input.length >= 8);
    setHasNumber(/\d/.test(input));
    setHasUppercase(/[A-Z]/.test(input));
    setHasLowercase(/[a-z]/.test(input));
    setHasSpecialChar(/[^A-Za-z0-9]/.test(input));
  };
  
  const handlePressTerms = () => {

    console.log('Terms of Services pressed');
  };


  
  return(
        <View style={{padding:10,backgroundColor:"white"}}>
            <CustomHeader
            title='Create Account'
            leftIcon={<Svg.ArrowBack/>}
            />
            <CustomTextInput
            placeholder={'Full Name'}
            />
            <CustomTextInput
            placeholder={'User Name'}
            />
            <CustomTextInput
            placeholder={'Phone'}
            />
             <CustomTextInput
            placeholder={'Email'}
            />
            <CustomTextInput
             value={password}
              onChangeText={handlePasswordChange}
            placeholder={'Password'}
                rightIcon={<Svg.EyeOpen/>}
            />
             <View style={style.guidelinesContainer}>
                
        <View style={style.guidelineRow}>
          <View style={[style.bullet,{backgroundColor: isValidLength ? '#7900BA' : 'transparent'}]}></View>
          <Text style={style.guidelineText}>Use 8 or more characters</Text>
        </View>

  <View style={{flexDirection:'row'}}>
        <View style={style.guidelineRow }>
          <View style={[style.bullet,{ backgroundColor: hasNumber ? '#7900BA' : 'transparent' }]}></View>
          <Text style={style.guidelineText}>One number</Text>
        </View>
        <View style={style.guidelineRow}>
           <View style={[style.bullet,{backgroundColor: hasUppercase ? '#7900BA' : 'transparent' }]}></View>
          <Text style={style.guidelineText}>One uppercase character</Text>
        </View>
  </View>

 <View style={{flexDirection:'row'}}>
        <View style={style.guidelineRow}>
          <View style={[style.bullet,{backgroundColor: hasLowercase ? '#7900BA' : 'transparent' }]}></View>
          <Text style={style.guidelineText}>One lowercase character</Text>
        </View>
        <View style={style.guidelineRow }>
           <View style={[style.bullet,{backgroundColor: hasSpecialChar ? '#7900BA' : 'transparent' }]}></View>
          <Text style={style.guidelineText}>One special character</Text>
        </View>
    </View>

      </View>
           <CustomTextInput
            placeholder={'Confirm Password'}
            rightIcon={<Svg.EyeOpen/>}
            />
            <View style={style.checkBoxContainer}>
       <TouchableOpacity
        style={style.checkbox}
        onPress={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <Svg.CheckboxActive
           color={theme.lightColor.purple}
          />
        )}
      </TouchableOpacity>
      <Text style={style.text}>
        I’ve read and agree with your{' '}
        <Text style={style.link}>
          Terms of Services
        </Text>
      </Text>
    </View>
            <CustomButton
            title={String.createAccount}
         style={{marginTop:theme.verticalSpacing.space_20,}}
                  
            />
            
    <View style={{ flexDirection: 'row', alignItems: 'center',width:'100%',marginTop:theme.verticalSpacing.space_18,justifyContent:'center' }}>
  <Text>Already have an account? </Text>
  <TouchableOpacity>
    <Text style={style.loginText}>Log in</Text>
  </TouchableOpacity>
  </View>
    </View>
    )
}

const style=StyleSheet.create({
    loginText:{
        color:theme.lightColor.purple,
        fontWeight:'500',
        fontSize:15,
        marginLeft:5
    },
    guidelinesContainer: {
  marginTop:10,
  },
  guidelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal:8,
   
  },
  bullet: {
   height:10,
   width:10,
   borderWidth:1,
    marginRight: 10,
    borderRadius:10,
   
  },
  guidelineText: {
    fontSize: 16,
  },
  
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize:theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
  link: {
    color: '#6200ea',
    fontWeight: 'bold',
  },
  checkbox: {
    width:theme.horizontalSpacing.space_20,
    height:theme.verticalSpacing.space_20 ,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
      borderRadius:5
  },
})
export default SignUpScreen;