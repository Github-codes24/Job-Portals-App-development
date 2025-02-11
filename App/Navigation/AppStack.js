//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import DrawerNav from './Drawer';
// import Profile from '../Screen/Profile/Profile';
import BottomTab from './BottomTab';
import AlertSetSuccess from '../Screen/Home/AlertSetSuccess';
import JobDetails from '../Screen/JobDetails/JobDetails';
import DrawerNav from './Drawer';

const Stack = createStackNavigator();
// create a component
const AppStack = () => {
    // const { login_status } = useSelector(state => state.User)
    return (
        <Stack.Navigator
            // initialRouteName='DrawerNav'
            screenOptions={{
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: 'horizontal',
                // ...TransitionPresets.ModalTransition,
            }}
        >
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
            {/* <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="AlertSetSuccess" component={AlertSetSuccess} />
            <Stack.Screen name="JobDetails" component={JobDetails} /> */}
            
        </Stack.Navigator>
    );
};

export default AppStack;
