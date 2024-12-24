
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import StackNavigation from './src/navigation/stackNavigation/navigation';
import BasicDetailsScreen from './src/screen/JobSeeker/CompleteYourProfile/BasicDetailsScreen';
const App=()=>{
    return(
      <View style={{flex:1}}>
       <StackNavigation/>
       {/* <BasicDetailsScreen/> */}
      </View>
    )
   }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;





// import { StyleSheet, Text, View } from 'react-native'
// import React, { useState } from 'react'
// import ResetPasswordSuccess from './src/screen/authScreen/forgetPasswordJob/ResetPasswordSuccess'
// import GenderSelect from './src/reusableComponents/customTextInput/GenderSelect'
// import CustomDropDownTextInput from './src/reusableComponents/customDropDownTextInput/CustomDropDownTextInput'

// const App = () => {
//   const [sValue, setsValue] = useState()
//   return (
//     <View style={{flex: 1, backgroundColor:'white',}}>
//       {/* <ResetPasswordSuccess/> */}
//       {/* <GenderSelect/> */}
//       <CustomDropDownTextInput data={ [
//     { label: 'country 1', value: '1' },
//     { label: 'country 2', value: '2' },
//     { label: 'country 3', value: '3' },
//     { label: 'country 4', value: '4' },
//     { label: 'country 5', value: '5' },
//     { label: 'country 6', value: '6' },
//     { label: 'country 7', value: '7' },
//     { label: 'country 8', value: '8' },

//   ]}  onChange={(I) => setsValue(I.value)} value={sValue}/>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})