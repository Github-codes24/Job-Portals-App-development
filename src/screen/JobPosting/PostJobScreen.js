import React from 'react';
import {TouchableOpacity,StyleSheet,Text} from 'react-native';

const PostJobScreen=({navigation})=>{
    return(
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JobOverviewScreen')}>
                <Text style={styles.buttonText}>Confirm and Post →</Text>
              </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6200ea',
        padding: 15,
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 680, 
        width: '90%', 
        height: 59,
        alignSelf: 'center',
      },
    
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
      },
    
})

export default PostJobScreen;