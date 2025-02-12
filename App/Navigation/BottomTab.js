import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PixelRatio,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
// import JobIcon from '../Assets/Icons/Jobsearch.svg';
// import JobIcon from '../Assets/Icons/jobicon.png';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../Screen/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { COLORS } from '../Constants/Colors';
import EditJobAlert from '../Screen/Home/EditJobAlert';
import JobDetails from '../Screen/JobDetails/JobDetails';
import Interviews from '../Screen/Jobs/Interviews';
import AppliedJobs from '../Screen/Jobs/AppliedJobs';
import SavedJobs from '../Screen/Jobs/SavedJobs';
import ApplicationDetails from '../Screen/ApplicationDetails/ApplicationDetails';
import Profile from '../Screen/Profile/Profile';
import SingleCompanyEmp from '../Screen/Jobs/SingleCompanyEmp';
import InviteApply from '../Screen/Jobs/InviteApply';
import Chat from '../Screen/Inbox/Chat';
import Settings from '../Screen/Settings/Settings';
// import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();
// const stack = createStackNavigator();
// const NativeStack = createNativeStackNavigator();

// Custom Tab Bar
const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      <ImageBackground
        source={require('../Assets/Images/BottamTabBg.png')}
        resizeMode="stretch"
        style={{height: 80, width: '100%'}}>
        <View style={styles.tabRow}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const iconName = getIconName(route.name);
            const isFocused = state.index === index || (state.index > 4 && index == 0);

            // if (index === 3) return null; // Hides center button
            return index < 5 && (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={styles.tabButton}>
                {/* <Icon
                  name={iconName}
                  size={24}
                  color={isFocused ? '#8134AF' : '#808080'}
                /> */}
                {index < 5 ? index == 2 ? (
                  <View></View>
                ) : (
                  <View style={{alignItems:'center'}}>
                    <Image
                      style={{
                        height: 22.8,
                        width: 25,
                        tintColor:isFocused ? '#8134AF' : '#000000'
                      }}
                      resizeMode="contain"
                      source={getIconSource(route.name)}
                    />
                    <Text style={{color: isFocused ? '#8134AF' : COLORS.text}}>
                      {route.name}
                    </Text>
                  </View>
                ): null}
              </TouchableOpacity>
            );
          })}

          <TouchableOpacity
            style={styles.fabButton}
            onPress={() => navigation.navigate('CenterButton')}>
            <Icon name="send" size={24} color="white" />
            {/* <Image source={require('../Assets/Icons/jobicon.png')}/> */}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// Function to map screen names to icons
const getIconSource = name => {
  if (name == 'Home') return require('../Assets/Icons/home.png');
  if (name == 'Inbox') return require('../Assets/Icons/Inbox.png');
  if (name == 'Profile') return require('../Assets/Icons/user.png');
  if (name == 'Jobs') return require('../Assets/Icons/jobicon.png');
};
const getIconName = name => {
  switch (name) {
    case 'Home':
      return 'home';
    case 'Inbox':
      return 'inbox';
    case 'Profile':
      return 'user';
    case 'Jobs':
      return 'search';
    default:
      return 'circle';
  }
};

const BottomTab = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: Colors.tangerine,
        // tabBarInactiveTintColor: Colors.text,

        // tabBarLabelStyle: {
        //   // fontSize: moderateScale(10),
        //   // fontFamily: FONTS.bold,
        //   fontWeight: '500',
        //   marginBottom: 8,
        // },

        // tabBarStyle: {
        //   // backgroundColor: COLORS.secondaryThemeColor,
        //   height: 60,
        //   paddingBottom: 0,
        //   paddingTop: 10,
        // },
        // tabBarIconStyle: {},
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{
        //   unmountOnBlur: true,
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({focused, color, size}) => (
        //     <Icon name="home" size={26} color="#7D47F1" />
        //   ),
        // }}
      />
      <Tab.Screen name="Inbox" component={Chat} />

      <Tab.Screen
        name="CenterButton"
        component={AppliedJobs}
        // options={{tabBarButton: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   unmountOnBlur: true,
        //   tabBarLabel: 'Profile',
        //   tabBarIcon: ({focused, color, size}) => (
        //     <Icon name="person-outline" size={26} color="#999" />
        //   ),
        // }}
      />
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      <Tab.Screen name="Jobs" component={SavedJobs} />
      <Tab.Screen name="SavedJobs" component={SavedJobs} />
      <Tab.Screen name="AppliedJobs" component={AppliedJobs} />
      <Tab.Screen name="EditJobAlert" component={EditJobAlert} />
      <Tab.Screen name="JobDetails" component={JobDetails} />
      <Tab.Screen name="SingleCompanyEmp" component={SingleCompanyEmp} />
      <Tab.Screen name="InviteApply" component={InviteApply} />
      <Tab.Screen name="ApplicationDetails" component={ApplicationDetails} />
      {/* <Tab.Screen name="Chat" component={Chat} /> */}
      <Tab.Screen name="Interviews" component={Interviews} />
      <Tab.Screen name="Settings" component={Settings} />
      {/* <Tab.Screen name="Interviews" component={Interviews} /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'white',
    height: 70,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // elevation: 5,
  },
  svgStyle: {
    position: 'absolute',
    top: -25,
    left: '50%',
    marginLeft: -50,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabButton: {
    position: 'absolute',
    top: -18,
    left: '50%',
    marginLeft: -30,
    width: 60,
    height: 60,
    backgroundColor: '#8134AF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
});

//make this component available to the app
export default BottomTab;

// import React from "react";
// import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Svg, { Path } from "react-native-svg";
// import Icon from "react-native-vector-icons/Feather";
// import Home from '../Screen/Home/Home';

// // Dummy Screens
// // const HomeScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;
// const InboxScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;
// const ProfileScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;
// const JobsScreen = () => <View style={{ flex: 1, backgroundColor: "#fff" }} />;

// const Tab = createBottomTabNavigator();

// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View style={styles.tabContainer}>
//       {/* Curved Background */}
//       <Svg width={400} height={100} viewBox="0 0 400 100" style={styles.curveBg}>
//         <Path
//           d="M0,20 Q200,-40 400,20 V100 H0 Z"
//           fill="white"
//         />
//       </Svg>

//       <View style={styles.tabRow}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const iconName = getIconName(route.name);
//           const isFocused = state.index === index;

//           if (index === 2) return null; // Hide center button slot

//           return (
//             <TouchableOpacity
//               key={route.key}
//               onPress={() => navigation.navigate(route.name)}
//               style={styles.tabButton}
//             >
//               <Icon name={iconName} size={24} color={isFocused ? "#8134AF" : "#808080"} />
//               <Text style={{ color: isFocused ? "#8134AF" : "#808080", fontSize: 12 }}>{route.name}</Text>
//             </TouchableOpacity>
//           );
//         })}

//         {/* Floating Center Button */}
//         <TouchableOpacity style={styles.fabButton} onPress={() => console.log("Center Button Clicked") }>
//           <Icon name="send" size={24} color="white" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const getIconName = (name) => {
//   switch (name) {
//     case "Home": return "home";
//     case "Inbox": return "inbox";
//     case "Profile": return "user";
//     case "Jobs": return "search";
//     default: return "circle";
//   }
// };

// const BottomTab = ()=> {
//   return (
//     // <NavigationContainer>
//       <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Inbox" component={InboxScreen} />
//         <Tab.Screen name="Center" component={Home} options={{ tabBarButton: () => null }} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//         <Tab.Screen name="Jobs" component={JobsScreen} />
//       </Tab.Navigator>
//     // </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   tabContainer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 100,
//     alignItems: "center",
//   },
//   curveBg: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   tabRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     flex: 1,
//     width: "100%",
//     marginTop: -40, // Adjust alignment
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   fabButton: {
//     position: "absolute",
//     top: -30,
//     left: "50%",
//     marginLeft: -30,
//     width: 60,
//     height: 60,
//     backgroundColor: "#8134AF",
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
// });
// export default BottomTab ;
