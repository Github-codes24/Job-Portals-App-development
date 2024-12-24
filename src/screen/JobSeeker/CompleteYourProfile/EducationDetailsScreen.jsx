import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import { theme } from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';
import CustomDropDownTextInput from '../../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
const EducationDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
        <CustomHeader
            title={'Education Details'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={() => navigation.goBack()}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Your Educational Background</Text>
              <Stepper/>   

              <CustomDropDownTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Highest Degree'}
              data = {[
                { "label": "High School Diploma or Equivalent", "value": "High School Diploma or Equivalent" },
                { "label": "Associate's Degree (A.A., A.S.)", "value": "Associate's Degree" },
                { "label": "Bachelor's Degree (B.A., B.S.)", "value": "Bachelor's Degree" },
                { "label": "Bachelor's Degree in Engineering (BEng, B.Tech, B.Sc. Eng.)", "value": "Bachelor's Degree in Engineering" },
                { "label": "Master's Degree (M.A., M.S.)", "value": "Master's Degree" },
                { "label": "Master's Degree in Engineering (MEng, M.Sc. Eng.)", "value": "Master's Degree in Engineering" },
                { "label": "Doctoral Degree (Ph.D., Ed.D., M.D.)", "value": "Doctoral Degree" },
                { "label": "Doctoral Degree in Engineering (D.Eng, Ph.D. in Engineering)", "value": "Doctoral Degree in Engineering" },
                { "label": "Professional Degree (J.D., M.D., D.D.S.)", "value": "Professional Degree" },
                { "label": "Other", "value": "Other" }
              ]              
              }
              // style={styles.Input}
              inputStyle={undefined}
              />
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Institution Name'}
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
              placeholder={'Year of Graduation'}
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
              placeholder={'Specialization (optional)'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <TouchableOpacity style={styles.AddEducation}>  <Svg.AddIcon/>  <Text style={styles.AddEducationText}>Add Another Education</Text></TouchableOpacity>
              <CustomButton
      title={'Save and Continue'}
      onPress={() => { navigation.navigate(MainRoutes.WORKEXPERIENCE_DETAILS)}}
      style={styles.btn}
      textStyle={undefined}
    />
              
    </View>
  )
}

export default EducationDetailsScreen

const styles = StyleSheet.create({
    main:{
        backgroundColor: 'white',
        padding: 10,

    },
    titleText:{
        fontSize: theme.fontSizes.size_18,
        color: theme.lightColor.gray,
        textAlign:'center',
        marginTop: theme.verticalSpacing.space_12,
    },
    btn:{
        marginTop: theme.verticalSpacing.space_26,
    },
    AddEducation:{
        flexDirection:'row',
        alignItems:'center',
        marginTop: theme.verticalSpacing.space_14,


    },
    AddEducationText:{
        color: theme.lightColor.gray,
        paddingLeft: theme.horizontalSpacing.space_10
    }
})