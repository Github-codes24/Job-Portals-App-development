import React from "react";
import { View,Text, StyleSheet } from "react-native";
import { theme } from "../../utils";
import CustomButton from "../../reusableComponents/button/button";
import { String } from "../../utils/string";

const JobSeekerScreen=()=>{


    const handlePress=()=>{
        console.log('pressed')
    }
    
return(
    <View style={style.main}>
        <View style={style.skillsView}>
       <Text>
       <View style={style.jobtextView}>
  <Text style={style.textStyle}>
    Find a job that suits your{" "}
    <Text style={{ color: theme.lightColor.purple }}>interest</Text>
    <Text style={{}}> &</Text>
    <Text style={{ color: theme.lightColor.purple,  }}>   skills.</Text>
  </Text>
  <Text style={style.exploreTextStyle}>Explore exciting opportunities tailored to your expertise and passions. Start your journey toward a career that truly fits you!</Text>
</View>

       </Text>
       </View>
       <CustomButton
       onPress={handlePress}
        title={String.getStarted}
        textStyle={{ fontFamily: theme.fontFamily.notoSans.medium_500 }}
        style={{marginTop:theme.verticalSpacing.space_34}}
        />
        <View style={style.termsAndPrivacyStyle}>
        <Text style={{color:theme.lightColor.gray}}>{String.termsAndPrivacy}</Text>
        </View>
    </View>
)
}

const style=StyleSheet.create({
    main:{
        
    },
    skillsView:{
marginTop:theme.verticalSpacing.space_30,
       padding:10,
        width:theme.horizontalSpacing.space_370,
        height:theme.verticalSpacing.space_388
    },
    textStyle:{
  fontSize:theme.fontSizes.size_36,
  fontWeight:'400',
  lineHeight:60
  
    },
    jobtextView:{
        width:theme.horizontalSpacing.space_260,
        height:theme.verticalSpacing.space_260,
    },
    exploreTextStyle:{
        fontWeight:'400',
        color:theme.lightColor.grayColor,
        lineHeight:22,
        marginTop:theme.verticalSpacing.space_26
    },
    termsAndPrivacyStyle:{
       marginTop:theme.verticalSpacing.space_230,
       justifyContent:'center',
       alignItems:"center" ,
       width:'100%'
    }
})
export default JobSeekerScreen;