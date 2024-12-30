
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
import { NavigationContainer } from '@react-navigation/native';
const App=()=>{
    return(
      <View style={{flex:1}}>
           <NavigationContainer>
       <StackNavigation/>
       </NavigationContainer>
      
      </View>
    )
   }



export default App;

