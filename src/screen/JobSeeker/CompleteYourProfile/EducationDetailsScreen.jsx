import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import { theme } from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
const EducationDetailsScreen = () => {
  return (
    <View style={styles.main}>
        <CustomHeader
            title={'Education Details'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={undefined}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Your Educational Background</Text>
              <Stepper/>   

              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Highest Degree'}
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
      onPress={undefined}
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
        color: theme.lightColor.gray,
        textAlign: 'center',
        marginTop: theme.verticalSpacing.space_12,
        fontSize: theme.fontSizes.size_18,
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