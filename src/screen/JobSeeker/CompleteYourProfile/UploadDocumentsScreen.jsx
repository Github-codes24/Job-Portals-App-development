import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../reusableComponents/appHeader/customHeader'
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import { String, theme } from '../../../utils';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import DocumentPicker from 'react-native-document-picker'
import { MainRoutes } from '../../../navigation/stackNavigation/routeAndParamsList';
const UploadDocumentsScreen = ({navigation}) => {

  const [UpPhoto, SetUpPhoto] = useState('Upload Photo')
  const [UpResume, SetUpResume] = useState('Upload Resume')
  const [UpAddDoc, SetUpAddDoc] = useState('Additional Documents (Optional)')
  const uploadPhoto = async () =>{
    try {
      const photoDoc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images]
      })
      SetUpPhoto(photoDoc.name)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user Cancelled the upload')
      }else{
        console.log(error);
      }
    }
  }
  const uploadResume = async () =>{
    try {
      const resumeDoc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf]
      })
      SetUpResume(resumeDoc.name)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user Cancelled the upload')
      }else{
        console.log(error);
      }
    }
  }
  const uploadAdditionalDoc = async () =>{
    try {
      const AdditionalDoc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles]
      })
      SetUpAddDoc(AdditionalDoc.name)
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('user Cancelled the upload')
      }else{
        console.log(error);
      }
    }
  }
  return (
    <View style={styles.main}>
    <CustomHeader
        title={'Upload Documents'}
              leftIcon={<Svg.ArrowBack />}
              onLeftPress={() => {navigation.goBack()}}
              rightIcon={undefined}
              onRightPress={undefined} />
              <Text style={styles.titleText}>Upload Supporting Documents</Text>
              <Stepper  />
              <Text style={styles.titleText}>{String.UploadDocumentsubTitle}</Text>

              {/* upload photo  */}
              <TouchableOpacity onPress={uploadPhoto}>
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={UpPhoto}
              editable={false}
              inputStyle={undefined}
              leftIcon={<Svg.UploadIcon/>}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              /> 
              </TouchableOpacity>


              <TouchableOpacity onPress={uploadResume}>
              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={UpResume}
              editable={false}
              inputStyle={undefined}
              leftIcon={<Svg.UploadIcon/>}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={uploadAdditionalDoc}>

              <CustomTextInput
              value={undefined}
              onChangeText={undefined}
              placeholder={UpAddDoc}
              editable={false}
              inputStyle={undefined}
              leftIcon={<Svg.UploadIcon/>}
              onLeftIconPress={undefined}
              rightIcon={undefined}
              onRightIconPress={undefined}
              />
              </TouchableOpacity>
              <CustomButton
      title={'Save and Continue'}
      onPress={() => navigation.navigate(MainRoutes.YOU_ARE_ALL_SET)}
      style={styles.btn}
      textStyle={undefined}
    />
    </View>
  )
}

export default UploadDocumentsScreen

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        padding: 10,
    },
    titleText:{
        fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign:'center',
    marginTop: theme.verticalSpacing.space_12,
    },
    btn:{
      marginTop: theme.verticalSpacing.space_38,
  },
})