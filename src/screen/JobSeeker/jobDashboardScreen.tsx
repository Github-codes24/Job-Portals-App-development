import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as Svg from "../../assets/images/svg";
import { theme } from "../../utils";
import JobCard from "../../reusableComponents/jobCard/jobCard";
import ProfileCompletionCard from "../../reusableComponents/ProfileCompletionCard/ProfileCompletionCard";

const JobDashboardScreen = ({ navigation }) => {

    const [count,setCount]=useState(0)
  return (
    <View style={styles.container}>
         <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      {/* Gradient Background */}
      <LinearGradient
        colors={["#3E1654", "#9857CF"]} // Gradient colors
        style={styles.header}
      >
        <View style={styles.headerRow}>
          {/* Menu Icon */}
          <TouchableOpacity>
          <Svg.Drower />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <Text style={styles.greetingText}>Hello,</Text>
            <Text style={styles.userName}>Adhya</Text>
           
          </View>
          {/* Right-side Icons */}
          <View style={styles.iconRow}>
            <TouchableOpacity>
            <Svg.MessageIcon />
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal:theme.horizontalSpacing.space_16}}>
            <Svg.SimpleBellIcon />
            </TouchableOpacity>

            <TouchableOpacity>
            <Svg.ProfileIcon />
            </TouchableOpacity>
          </View>
         
        </View>

        {/* Search Input */}
        <View style={styles.searchContainer}>
            <Svg.SearchIcon/>
          <TextInput
            style={styles.searchInput}
            placeholder="Search job here..."
            placeholderTextColor="#aaa"
          />
        </View>
     <View style={{height:theme.verticalSpacing.space_18,marginTop:theme.horizontalSpacing.space_100,flexDirection:"row",alignSelf:"flex-end"}}>
       <Text style={{marginRight:5}}>job Alerts</Text>
       <Svg.BellIcon/>
     </View>

     <Text style={{color:"black",fontSize:theme.fontSizes.size_16,fontWeight:'500'}}>Overview</Text>

     <Text style={{color:theme.lightColor.gray,fontSize:theme.fontSizes.size_14,fontWeight:'500',marginTop:10}}>Here is your daily activities and job alerts</Text>

      </LinearGradient>
{/* ----------------------CARD VIEW------------------------------------ */}
        <View  style={[styles.cardView,{paddingLeft:15}]}>
       <JobCard
       color={'#9857CF'}
      topRightSvg={<Svg.DotIcon color={'brown'} />}
      backgroundImage={require('../../assets/images/wright.png')}
      count={count}
      title={'jobs applied'} />

        <JobCard
       color={'#3E1654'}
       topRightSvg={<Svg.DotIcon/>}
       backgroundImage={require('../../assets/images/questionMark.png')}
        count={count}
        title={'saves jobs'}
      />
      <Svg.CircleArrow/>
</View>
{/* ---------------------------------------------------------------------- */}
    <ProfileCompletionCard
    />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  width:"100%",
  height:'100%',
backgroundColor: "#f0f0f0",
  },
  header: {
    borderBottomLeftRadius:theme.horizontalSpacing.space_30,
    borderBottomRightRadius: theme.horizontalSpacing.space_30,
    paddingVertical:theme.verticalSpacing.space_20,
    paddingHorizontal:theme.horizontalSpacing.space_18,
    height:theme.verticalSpacing.space_165
  },
  headerRow: {
    
    marginTop:theme.verticalSpacing.space_38,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
   width:theme.horizontalSpacing.space_187,

    marginLeft: 10,
  },
  greetingText: {
    color: "#fff",
    fontSize: theme.fontSizes.size_14,
    fontWeight: "400",
  },
  userName: {
    color: "#fff",
    fontSize:theme.fontSizes.size_24,
    fontWeight: "bold",
  },
  iconRow: {
    marginHorizontal:15,
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: { 
    
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"center",
    backgroundColor: "white",
    position:"absolute",
    borderRadius:theme.horizontalSpacing.space_50,
    marginTop:theme.verticalSpacing.space_140,
    paddingLeft: 10,
    paddingVertical: 5,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width:theme.horizontalSpacing.space_328,
    marginLeft:theme.horizontalSpacing.space_30,
    height:theme.verticalSpacing.space_58
  },
  searchInput: {
   
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 5,
  },
  cardView:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-around",
    marginTop:theme.verticalSpacing.space_156
    
  }
});

export default JobDashboardScreen;
