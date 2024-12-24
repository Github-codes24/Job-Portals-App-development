import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React,{useState} from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import { theme } from '../../../utils';
import CustomButton from '../../../reusableComponents/button/button';
const WorkExperienceScreen = ({navigation}) => {
   
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{padding: 10,backgroundColor:'white'}}>
      <CustomHeader
            title={'Work Experience'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={()=>navigation.goBack()}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Your Educational Background</Text>
              <Stepper/>   
                <View style={styles.checkBoxContainer}>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
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
                                Remember me
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
            <TouchableOpacity style={styles.WorkingCheck} > <Svg.CheckboxActive/> <Text style={styles.WorkingCheckText}>Currently Working Here</Text> </TouchableOpacity>
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
      onPress={undefined}
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
    marginVertical: 10,
   marginTop:20,
    width:'100%',
    justifyContent:"space-between"
  },
  checkbox: {
    width:theme.horizontalSpacing.space_18,
    height:theme.verticalSpacing.space_18 ,
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