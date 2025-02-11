import CheckBox from '@react-native-community/checkbox';
import {Dropdown} from 'react-native-element-dropdown';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../Constants/Colors';
import {CommonStyles} from '../../Constants/Styles';

const Skills = ({setCurrTab}) => {
  const [fullTime, setFullTime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [freelance, setFreelance] = useState(false);
  const [internship, setInternship] = useState(false);

  const [selectedSkills, setSelectedSkills] = useState([]);

  const skillsList = ['Figma', 'Canva', 'Photoshop'];

  const toggleSkill = skill => {
    setSelectedSkills(prevSelected =>
      prevSelected.includes(skill)
        ? prevSelected.filter(s => s !== skill)
        : [...prevSelected, skill],
    );
  };

  // const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 20, paddingTop: 40}}>
        <Text style={styles.label}>Job Type</Text>

        <View style={{marginTop:10,marginBottom:20}}>
          <Text style={styles.title}>
            Highlight Your Skills and Preferences to stand out
          </Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillsLabel}>Skills</Text>
            <View style={styles.skillsList}>
              {skillsList.map(skill => (
                <TouchableOpacity
                  key={skill}
                  style={[
                    styles.skillButton,
                    selectedSkills.includes(skill) && styles.selectedSkill,
                  ]}
                  onPress={() => toggleSkill(skill)}>
                  <Text
                    style={[
                      styles.skillText,
                      selectedSkills.includes(skill) &&
                        styles.selectedSkillText,
                    ]}>
                    {skill}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={fullTime}
              onValueChange={() => setFullTime(!fullTime)}
            />
            <Text>Full Time</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={partTime}
              onValueChange={() => setPartTime(!partTime)}
            />
            <Text>Part Time</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={freelance}
              onValueChange={() => setFreelance(!freelance)}
            />
            <Text>Freelance</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={internship}
              onValueChange={() => setInternship(!internship)}
            />
            <Text>Internship</Text>
          </View>
        </View>

        <Dropdown
          style={[styles.input]}
          // placeholderStyle={styles.dropDownPlaceholderStyle}
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Software Developer', value: 'Software Developer'},
            {label: 'Data SCientist', value: 'Data SCientist'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Designation'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />

        <Dropdown
          style={[styles.input]}
          // placeholderStyle={styles.dropDownPlaceholderStyle}
          // selectedTextStyle={{color: Colors.black}}
          itemTextStyle={{
            color: 'black',
            marginVertical: -8,
          }}
          data={[
            {label: 'Nagpur', value: 'Nagpur'},
            {label: 'Kolkata', value: 'Kolkata'},
            {label: 'Mumbai', value: 'Mumbai'},
            {label: 'Bangalore', value: 'Bangalore'},
            {label: 'Delhi', value: 'Delhi'},
          ]}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Preferred Location'}
          // value={selectedValue}
          //onFocus={() => setIsFocus(true)}
          //onBlur={() => setIsFocus(false)}

          //   onChange={item => {
          //     console.log('item.valuee..', item.value);
          //     // setState(pre => ({ ...pre, category: item.value }));
          //   }}
        />

        <Text style={{fontSize: 15, marginVertical: 10}}>
          Desired Salary Range
        </Text>
        <View style={styles.salaryContainer}>
          {/* <TextInput style={styles.salaryInput} placeholder="Min" /> */}
          <Dropdown
            style={[styles.salaryInput]}
            // placeholderStyle={styles.dropDownPlaceholderStyle}
            // selectedTextStyle={{color: Colors.black}}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              {label: '15k', value: '15k'},
              {label: '30', value: '30'},
              {label: '45k', value: '45k'},
              {label: '60k', value: '60k'},
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Min'}
            // value={selectedValue}
            //onFocus={() => setIsFocus(true)}
            //onBlur={() => setIsFocus(false)}

            //   onChange={item => {
            //     console.log('item.valuee..', item.value);
            //     // setState(pre => ({ ...pre, category: item.value }));
            //   }}
          />

          <Dropdown
            style={[styles.salaryInput]}
            // placeholderStyle={styles.dropDownPlaceholderStyle}
            // selectedTextStyle={{color: Colors.black}}
            itemTextStyle={{
              color: 'black',
              marginVertical: -8,
            }}
            data={[
              {label: '30', value: '30'},
              {label: '45k', value: '45k'},
              {label: '60k', value: '60k'},
              {label: '80k', value: '80k'},
            ]}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Max'}
            // value={selectedValue}
            //onFocus={() => setIsFocus(true)}
            //onBlur={() => setIsFocus(false)}

            //   onChange={item => {
            //     console.log('item.valuee..', item.value);
            //     // setState(pre => ({ ...pre, category: item.value }));
            //   }}
          />
        </View>
        <TouchableOpacity
          style={CommonStyles.button}
          onPress={() => setCurrTab('6')}
          // onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Save</Text>
          <Icon name={'arrow-right'} size={22} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#fff',
  },

  skillbox: {
    // padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop:10,
    marginBottom:20,
  },
  title: {
    fontSize: 16,
    color: '#666',
    // textAlign: 'center',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#D3D3D39C',
    // backgroundColor: '#F8F8F8',
  },
  skillsLabel: {
    fontSize: 16,
    color: '#000000',
    marginRight: 10,
  },
  skillsList: {
    flexDirection: 'row',
  },
  skillButton: {
    // backgroundColor: '#E0E0E0',
    backgroundColor: '#666666',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedSkill: {
    backgroundColor: '#666',
  },
  skillText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  selectedSkillText: {
    color: '#FFF',
  },

  label: {
    fontSize: 16,
    color: COLORS.regularText,
    marginBottom: 5,
    marginTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 25,
    columnGap: 5,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F7F8F9',
  },
  salaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  salaryInput: {
    width: '48%',
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F7F8F9',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Skills;
