import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import { theme } from '../../../utils';
import Stepper from './Stepper';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
const BasicDetailsScreen = () => {
  return (
    <View style={styles.main} >
        <CustomHeader
        title={'Basic Details'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={undefined}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Let’s Start with the Basics</Text>
              <Stepper/>
              <CustomTextInput 
              value={undefined}
              onChangeText={undefined}
              placeholder={'Full Name'}
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
              placeholder={'Date Of Birth'}
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
              placeholder={'Gender'}
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
              placeholder={'Contact Number'}
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
              placeholder={'Email Address'}
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
              placeholder={'Location'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <CustomButton
      title={'Save and Continue'}
      onPress={undefined}
      style={styles.btn}
      textStyle={undefined}
    />
    </View>
  )
}

export default BasicDetailsScreen

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
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
    }

})