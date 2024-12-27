import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../reusableComponents/appHeader/customHeader'
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput'
import Stepper from './Stepper';
import * as Svg from '../../../assets/images/svg';
import CustomButton from '../../../reusableComponents/button/button';
import { theme } from '../../../utils';
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';
import CustomDatePicker from '../../../reusableComponents/CustomDatePicker/CustomDatePicker';

const CertificationScreen = ({navigation}) => {
  const [showDatePicker, SetShowDatePicker] = useState(false)
    const [selectedDate, SetSelectedDate] = useState(null)

    const handleDateToggel = () => {
      SetShowDatePicker(true)
    }
  return (
    <View style={styles.main}>
       <CustomHeader
            title={'Cetrifications'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={() => { navigation.goBack()}}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Do You Have Certifications?</Text>
              <Stepper/>   

              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={'Certification Name'}
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
              placeholder={'Issuing Organization'}
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
              placeholder={'Credentials I’d'}
              // style={styles.Input}
              inputStyle={undefined}
              leftIcon={undefined}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              <CustomDatePicker
              selectedDate={selectedDate}
              showDatePicker={showDatePicker}
              placeholder={'Date Of Completion'}
              onPress={handleDateToggel}
              onConfirm={(date) => {
                if (date) {
                  SetSelectedDate(date)
                }
                SetShowDatePicker(false)
              }}
              onCancel={() => {
                SetShowDatePicker(!showDatePicker)
              }}
               />
              
              <View style={styles.addskips}>

               <TouchableOpacity style={styles.AddAnother} > <Svg.AddIcon/> <Text style={styles.AddAnotherText}> Add Another Certification</Text> </TouchableOpacity>
               <TouchableOpacity style={styles.skips} > <Text style={styles.skipsText}> Skip</Text> <Svg.ArrowNext/> </TouchableOpacity>
              </View>
             <CustomButton
      title={'Save'}
      onPress={() => navigation.navigate(MainRoutes.SKILLS_AND_PREFERANCES)}
      style={styles.btn}
      textStyle={undefined}
    />
    </View>
  )
}

export default CertificationScreen

const styles = StyleSheet.create({
  main:{
    padding: 10,
    backgroundColor:'white',
     flex:1
  },
  titleText:{
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign:'center',
    marginTop: theme.verticalSpacing.space_12,
},
    addskips:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: theme.verticalSpacing.space_20,
        
    }, btn:{
      marginTop: theme.verticalSpacing.space_38,
  },
    AddAnother:{
        flexDirection:'row'
    },
    skips:{
        flexDirection:'row',
    },
    AddAnotherText:{
      marginLeft: theme.horizontalSpacing.space_4,
    },
    skipsText:{
      marginRight:theme.horizontalSpacing.space_6,
    }
})