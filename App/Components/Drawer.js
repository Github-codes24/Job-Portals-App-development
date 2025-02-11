
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Share, Alert, Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// import { COLORS } from '../../Screens/Constant/Colors';
import NavigationService from '../Services/Navigation';
// import { DrawerContentScrollView, DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer';
// import { useNavigation } from '@react-navigation/native';
// create a component
const DrawerContent = (props) => {
    // const theme = useTheme();
    // const NavigationService = useNavigation();

    // useEffect(() => {
    //     console.log('drawer props navigation....', props.navigation);
    // }, []);

    // const onConfirmLogout = () => {
    //     Alert.alert(
    //         "Are you Sure?",
    //         "You want to Logout",
    //         [
    //             {
    //                 text: "No",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //             },
    //             { text: "Yes", onPress: () => logOut() }
    //         ]
    //     );
    // }

    // const showPaymentDetails = async () => {
    //     let data = {
    //         type: 'payment-list'
    //         // "enrollment-no": item.enrollment_number,
    //         // "search": ""
    //     }
    //     // console.log('data....',data);
    //     let res = await AuthService.payment(data);
    //     console.log('res.....',res);
    //     if(res.code ==200){
    //         dispatch(setPaymentList(res.data.payments));
    //         NavigationService.navigate('Payment',{admissionList:false});
    //     }
    // }
  
    return (
        // <DrawerContentScrollView {...props}>
        //     <Pressable style={{ flexDirection: 'row', marginBottom: 20 }}>
        //         <Image
        //             style={styles.profileImage}
        //             source={Images.profileImage}
        //         />
        //         <View style={{ justifyContent: 'center', marginLeft: 15 }}>
        //             <Text style={styles.title}>Rahul Sharma</Text>
        //             <Text>NYCTA-HO-22R-0001</Text>
        //         </View>
        //     </Pressable>
        //     {/* {console.log('state.routes.....')} */}
        //     <DrawerItem
        //         icon={() => (
        //             <Image
        //                 source={Images.dashboard}
        //                 style={{
        //                     height: 20,
        //                     width: 20,
        //                     tintColor: Colors.drawerIconColor
        //                 }}
        //             />
        //         )}
        //         // focused={true}
        //         // activeTintColor={Colors.tangerine}
        //         label={({color})=>(<Text style={{...styles.name,color:color}}>Dashboard</Text>)}
        //     />
        // </DrawerContentScrollView>


        <View style={{ ...styles.container }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, marginLeft: 20, marginTop: 15 }}>
  

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 40
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.3,
        paddingHorizontal: 10,
        paddingVertical: 12,
        // marginLeft:15
        // borderColor: '#eaebeb'
    },
});

//make this component available to the app
export default DrawerContent;
