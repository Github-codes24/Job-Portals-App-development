import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import JobDashboardScreen from '../../screen/JobSeeker/jobDashboardScreen';
import Home from './home';
import Inbox from './inbox';
import Jobs from './jobs';
import Profile from './profile';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            // navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabBarItem}>
            {/* <Ionicons
              name={isFocused ? `${label.toLowerCase()}-sharp` : `${label.toLowerCase()}-outline`}
              size={24}
              color={isFocused ? '#6C33E9' : 'gray'}
            /> */}
            <Text style={{ color: isFocused ? '#6C33E9' : 'gray', fontSize: 12 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={JobDashboardScreen} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Jobs" component={Jobs} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
