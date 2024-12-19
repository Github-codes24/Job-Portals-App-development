import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../../utils'
import { String } from '../../../utils/string'
import CustomButton from '../../../reusableComponents/button/button'

const ResetPasswordSuccess = () => {
  return (
    <View>
      <Image source={require('../../../assets/images/Vector.png')} style={styles.Img} />
      <Text style={styles.ResetText}>{String.ResetPasswordSuccess}</Text>
      <Text style={styles.ResetTextSmall}>{String.LoginWithNewPassword}</Text>
      <CustomButton 
       title={'Login'}
       onPress={undefined}
       style={styles.btn}
       textStyle={undefined}
      />
    </View>
  )
}

export default ResetPasswordSuccess

const styles = StyleSheet.create({
    Img:{
        marginHorizontal: theme.horizontalSpacing.space_20,
        alignSelf: 'center',
        marginTop: theme.verticalSpacing.space_100,
    },
    ResetText:{
        fontSize: theme.fontSizes.size_36,
        marginHorizontal: theme.horizontalSpacing.space_2,
        alignSelf:'center',
        textAlign:'center',
        marginTop: theme.verticalSpacing.space_22,
    },
    ResetTextSmall:{
        fontSize: theme.fontSizes.size_20,
        marginHorizontal: theme.horizontalSpacing.space_2,
        alignSelf:'center',
        marginTop: theme.verticalSpacing.space_14,
        color: theme.lightColor.gray,
    },
    btn:{
        marginTop: theme.verticalSpacing.space_36,
        width: theme.horizontalSpacing.space_328,
    }
})