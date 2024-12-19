import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { MainRoutes } from "../../navigation/stackNavigation/routeAndParamsList";

const JobDashboardScreen=({navigation})=>{
return(
    <View style={{alignItems:"center",justifyContent:"center"}}>
        <Text>JobDashboardScreen</Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate(MainRoutes.BASIC_DETAILS_SCREEN)}
        >
            <Text>EDIT PROFILE</Text>
        </TouchableOpacity>
    </View>
)
}

export default JobDashboardScreen;