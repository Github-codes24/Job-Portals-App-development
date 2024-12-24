import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import { theme } from '../../../utils';
import CustomButton from '../../../reusableComponents/button/button';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';
const WorkExperienceScreen = ({navigation}) => {
  const [iAmFresher, SetiAmFresher] = useState(false)
  const [isChecked,setIsChecked]=useState(false)
  return (
    <View style={{padding: 10, backgroundColor:'white'}}>
      <CustomHeader
            title={'Work Experience'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={() => { navigation.goBack()}}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Tell Us About Your Work Experience</Text>
              <Stepper/>   
                <View style={styles.checkBoxContainer}>
                          <View style={{flexDirection:"row",alignItems:"center",width:'100%',justifyContent:"center"}}>
                               <TouchableOpacity
                                style={styles.checkbox}
                                onPress={() => setIsChecked(!isChecked)}
                              >
                                {isChecked && (
                                  <Svg.CheckboxActive
                                  color={theme.lightColor.purple}
                                  />
                                )}
                              </TouchableOpacity>
                              <Text style={styles.text}>
                                i am a Fresher
                              </Text>
                              </View>
                            </View>
                            


              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Job Title'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Company Name'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Start Date'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'End Date'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
            <TouchableOpacity style={styles.WorkingCheck} > <Svg.CheckboxInactive/> <Text style={styles.WorkingCheckText}>Currently Working Here</Text> </TouchableOpacity>
            <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Responsibilities'}
            //   style={styles.InputArea}
              numberOfLines={4}
              multiline={true}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
             <TouchableOpacity style={styles.AddAnotherJob} > <Svg.AddIcon/> <Text style={styles.AddAnotherJobText}> Add Another Job</Text> </TouchableOpacity>
             <CustomButton
      title={'Save and Continue'}
      onPress={() => navigation.navigate(MainRoutes.CERTIFICATION_DETAILS)}
      style={styles.btn}
      textStyle={undefined}
    />
    </View>
  )
}

export default WorkExperienceScreen

const styles = StyleSheet.create({
    FresherCheck:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    FresherCheckText: {
        paddingLeft: theme.horizontalSpacing.space_10,
    },
    titleText:{
        fontSize: theme.fontSizes.size_18,
        color: theme.lightColor.gray,
        textAlign:'center',
        marginTop: theme.verticalSpacing.space_12,
    },
    WorkingCheckText: {
        paddingLeft: theme.horizontalSpacing.space_10,
    },
     checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    justifyContent:"space-between"
  },
  checkbox: {
    width:theme.horizontalSpacing.space_20,
    height:theme.verticalSpacing.space_20 ,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius:5
  },
  text: {
    fontSize:theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
    WorkingCheck:{
        flexDirection: 'row',
        justifyContent:"flex-start",
        marginVertical: theme.verticalSpacing.space_12,
    },
    AddAnotherJobText: {
        paddingLeft: theme.horizontalSpacing.space_10,
    },
    AddAnotherJob:{
        flexDirection: 'row',
        justifyContent:"flex-start",
        marginVertical: theme.verticalSpacing.space_12,
    },
    btn:{
        marginTop: theme.verticalSpacing.space_26,
    },
    
})