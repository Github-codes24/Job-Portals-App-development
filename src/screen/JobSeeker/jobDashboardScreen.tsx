import React, { useState } from "react";
import { View, Text, TextInput,FlatList, StyleSheet,Image, StatusBar, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import * as Svg from "../../assets/images/svg";
import { theme } from "../../utils";
import JobCard from "../../reusableComponents/jobCard/jobCard";
import ProfileCompletionCard from "../../reusableComponents/ProfileCompletionCard/ProfileCompletionCard";
import { MainRoutes } from "../../navigation/stackNavigation/routeAndParamsList";
import { Jobs } from "../../utils/jobData";
import { ScrollView } from "react-native-gesture-handler";
const JobDashboardScreen = ({ navigation }) => {

    const [count,setCount]=useState(0)

 const renderItem = ({ item }) => (
    <View style={{backgroundColor:"white",width:'100%s'}}>
    <LinearGradient 
    colors={["#FFF7E7", "#FFFFFF"]} 
    style={styles.card}>
      <Image source={{ uri: item.companyLogo }} style={styles.logo} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:theme.verticalSpacing.space_20}}>
          <View style={{flexDirection:'row',alignItems:"center"}}>
            <Svg.LocationIcon/>
        <Text style={styles.details}>{item.location}</Text>
        </View>

        <Text style={[styles.details,{marginLeft:10}]}>{item.salary}</Text>
        </View>
        <View style={{flexDirection:"row",marginLeft:-80,alignItems:"center",marginTop:theme.verticalSpacing.space_20,justifyContent:'space-between'}}>
        <Text style={styles.details}>Date Applied: {item.dateApplied}</Text>
        <Text style={[styles.status, item.status === 'Active' ? styles.active : styles.inactive]}>{item.status}</Text>
         <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.actions}>
        <Text style={styles.jobType}>{item.jobType}</Text>
       
      </View>
    </LinearGradient>
    </View>
  );

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
     <ScrollView
       showsVerticalScrollIndicator={false} 
       style={{backgroundColor:"#FFFFFF"}}
     >
  
    <ProfileCompletionCard
    onPress={()=>navigation.navigate(MainRoutes.BASIC_DETAILS_SCREEN)}
    />
     <View style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      width: "100%",
      paddingHorizontal: 20,
      marginTop: theme.verticalSpacing.space_16,
    }}>
      <Text style={{ color: "black", fontWeight: '600' }}>Apply Now</Text>
      <TouchableOpacity>
        <Text style={{ color: "black", fontWeight: '600' }}>View all</Text>
      </TouchableOpacity>
    </View>
    
     <FlatList
      data={Jobs}
      renderItem={renderItem}
      // keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    /> 
    </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
  width:"100%",
  height:'100%',
backgroundColor: "white",
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
    marginTop:theme.verticalSpacing.space_140
    
  },
   list: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginTop:10
  },
  card: {
    height:theme.verticalSpacing.space_126,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3
  },
  logo: {
    width:theme.horizontalSpacing.space_68,
    height:theme.verticalSpacing.space_68,
    borderRadius: 5
  },
  content: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  details: {
    color: '#555',
    fontSize: 12,
    marginLeft:5
  },
  status: {
   marginLeft:theme.horizontalSpacing.space_40,
    fontWeight: 'bold',
    fontSize: 12
  },
  active: {
    color: 'green'
  },
  inactive: {
    color: 'red'
  },
  actions: {
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  jobType: {
    backgroundColor: '#e1bee7',
    color: '#6a1b9a',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 12
  },
  button: {
    width:theme.horizontalSpacing.space_92,
    height:theme.verticalSpacing.space_30,
    backgroundColor: '#3E1654',
   alignItems:"center",
   justifyContent:'center',
    borderRadius: 5,
    marginLeft:theme.horizontalSpacing.space_50
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center'
  }
});

export default JobDashboardScreen;
