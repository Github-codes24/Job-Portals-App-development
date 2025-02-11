import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const BasicDetails = ({setCurrTab}) => {
  const [isFresher, setIsFresher] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Update your basic details</Text>
      {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={isFresher}
          onValueChange={setIsFresher}
          tintColors={{ true: '#6A0DAD', false: '#6A0DAD' }}
        />
        <Text style={styles.checkboxLabel}>I am a Fresher</Text>
      </View> */}

      {!isFresher && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Ninad Sathe"
            placeholderTextColor="#999"
            editable={true}
          />
          <TextInput
            style={styles.input}
            placeholder="06/11/2000"
            placeholderTextColor="#999"
            editable={true}
          />

          <Dropdown
            style={[styles.input]}
            placeholderStyle={{color:'#999'}}
            // selectedTextStyle={{color: Colors.black}}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
              {label: 'Others', value: 'Others'},
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Male'}
            // value={selectedValue}
            //onFocus={() => setIsFocus(true)}
            //onBlur={() => setIsFocus(true)}

            //   onChange={item => {
            //     console.log('item.valuee..', item.value);
            //     // setState(pre => ({ ...pre, category: item.value }));
            //   }}
          />
          <TextInput
            style={styles.input}
            placeholder="+91 1234567890"
            placeholderTextColor="#999"
            editable={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Nagpur, Maharashtra, India"
            placeholderTextColor="#999"
            editable={true}
          />
          <TextInput
            style={styles.input}
            placeholder="ninad@gmail.com"
            placeholderTextColor="#999"
            editable={true}
          />
        </>
      )}

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => setCurrTab('2')}>
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
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  //   dateInputContainer: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     position: 'relative',
  //   },
  //   dateInput: {
  //     flex: 1,
  //     paddingRight: 40,
  //   },
  //   icon: {
  //     position: 'absolute',
  //     right: 10,
  //   },
  //   textArea: {
  //     height: 80,
  //     textAlignVertical: 'top',
  //   },
  addJobButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  addJobText: {
    fontSize: 16,
    color: '#666666',
    marginLeft: 8,
  },
  saveButton: {
    backgroundColor: '#6A0DAD',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 150,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default BasicDetails;
