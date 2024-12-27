import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../customTextInput/customTextInput';
import * as Svg from '../../assets/images/svg';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const CustomDatePicker = ({onPress, placeholder, onConfirm, onCancel , showDatePicker , selectedDate}) => {

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <CustomTextInput 
        placeholder={placeholder}
        editable={false}
        rightIcon={<Svg.CalenderIcon/>}
        value={selectedDate ? moment(selectedDate).format("MMM Do YY") : ''}
        />
      </TouchableOpacity>
      <DatePicker
      mode='date'
      modal={true}
      open={showDatePicker}
      date={selectedDate ? selectedDate : new Date()}
      onConfirm={onConfirm}
      onCancel={onCancel}
       />
    </View>
  )
}

export default CustomDatePicker

const styles = StyleSheet.create({})