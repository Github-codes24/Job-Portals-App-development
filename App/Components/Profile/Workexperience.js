import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WorkExperience = ({setCurrTab}) => {
  const [isFresher, setIsFresher] = useState(false);
  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update Your Work Experience</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isFresher}
          onValueChange={setIsFresher}
          tintColors={{ true: '#6A0DAD', false: '#6A0DAD' }}
        />
        <Text style={styles.checkboxLabel}>I am a Fresher</Text>
      </View>

      {!isFresher && (
        <>
          <TextInput style={styles.input} placeholder="Job Title" placeholderTextColor="#999" />
          <TextInput style={styles.input} placeholder="Company Name" placeholderTextColor="#999" />
          <View style={styles.dateInputContainer}>
            <TextInput style={[styles.input, styles.dateInput]} placeholder="Start Date" placeholderTextColor="#999" />
            <Icon name="calendar" size={24} color="#6A0DAD" style={styles.icon} />
          </View>
          <View style={styles.dateInputContainer}>
            <TextInput style={[styles.input, styles.dateInput]} placeholder="End Date" placeholderTextColor="#999" editable={!currentlyWorking} />
            <Icon name="calendar" size={24} color="#6A0DAD" style={styles.icon} />
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={currentlyWorking}
              onValueChange={()=> setCurrentlyWorking(!currentlyWorking)}
              tintColors={{ true: '#6A0DAD', false: '#6A0DAD' }}
            />
            <Text style={styles.checkboxLabel}>Currently Working Here</Text>
          </View>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Responsibilities"
            placeholderTextColor="#999"
            multiline
          />
          <TouchableOpacity style={styles.addJobButton}>
            <Icon name="plus-box-outline" size={24} color="#6A0DAD" />
            <Text style={styles.addJobText}>Add Another Job</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={()=>setCurrTab('4')}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    backgroundColor: '#F8F8F8',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  dateInput: {
    flex: 1,
    paddingRight: 40,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  addJobButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  addJobText: {
    fontSize: 16,
    color: '#6A0DAD',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#6A0DAD',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom:150
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default WorkExperience;

