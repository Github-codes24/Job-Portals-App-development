import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import {theme} from '../../../utils';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomDropDownTextInput from '../../../reusableComponents/customDropDownTextInput/CustomDropDownTextInput';
import CustomButton from '../../../reusableComponents/button/button';
import {MainRoutes} from '../../../navigation/stackNavigation/routeAndParamsList';

const SkillsAndPreferencesScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Python', value: 'Python'},
    {label: 'DSA', value: 'DSA'},
    {label: 'PHP', value: 'PHP'},
    {label: 'React Native', value: 'React Native'},
    {label: 'Node.js', value: 'Node.js'},
  ]);

  return (
    <ScrollView style={styles.main}>
      <CustomHeader
        title={'Skills and Preferences'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => {
          navigation.goBack();
        }}
        rightIcon={undefined}
        onRightPress={undefined}
      />
      <Text style={styles.titleText}>
        Highlight Your Skills and Preferences to stand out
      </Text>
      <Stepper />

      <View style={styles.container}>
        {/* Dropdown */}
        <Text style={styles.label}>Skills</Text>
        <DropDownPicker
          multiple={true}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select skills"
          dropDownContainerStyle={styles.dropdown}
          style={styles.dropdownButton}
          listMode="SCROLLVIEW"
        />

        {/* Selected Skills */}
        <View style={styles.selectedSkillsContainer}>
          {value.map((skill, index) => (
            <View key={index} style={styles.skillButton}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.JobTypeTitle}>Job Type</Text>
      <View style={styles.JobTypeContainer}>
        <TouchableOpacity style={styles.JobTypeBtn}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Full Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Part Time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Frelance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.JobTypeBtn}>
          <Svg.CheckboxActive />
          <Text style={styles.JobTypeText}>Intership</Text>
        </TouchableOpacity>
      </View>

      <CustomDropDownTextInput
        value={undefined}
        onChange={undefined}
        placeholder={'Preferred Designation'}
        data={[
          {label: 'Manager', value: 'Manager'},
          {label: 'Developer', value: 'Developer'},
          {label: 'Designer', value: 'Designer'},
          {label: 'Tester', value: 'Tester'},
          {label: 'Other', value: 'Other'},
        ]}
        // style={styles.Input}
        inputStyle={undefined}
      />
      <CustomDropDownTextInput
        value={undefined}
        onChange={undefined}
        placeholder={'Preferred Location'}
        data={[
          {label: 'Nagpur', value: 'Nagpur'},
          {label: 'Pune', value: 'Pune'},
          {label: 'San Francisco', value: 'San Francisco'},
          {label: 'London', value: 'London'},
          {label: 'Berlin', value: 'Berlin'},
          {label: 'Remote', value: 'Remote'},
          {label: 'Other', value: 'Other'},
        ]}
        inputStyle={undefined}
      />

      <Text style={styles.SalaryRangeTitle}>Desired Salary Range</Text>
      <View style={styles.SalaryRangeContainer}>
        <CustomDropDownTextInput
          value={undefined}
          onChange={undefined}
          placeholder={'Min'}
          data={[
            {label: '₹3,00,000', value: '300000'},
            {label: '₹4,00,000', value: '400000'},
            {label: '₹5,00,000', value: '500000'},
            {label: '₹6,00,000', value: '600000'},
            {label: '₹7,00,000', value: '700000'},
            {label: 'Other', value: 'Other'},
          ]}
          style={styles.MinSalary}
        />
        <CustomDropDownTextInput
          value={undefined}
          onChange={undefined}
          placeholder={'Max'}
          data={[
            {label: '₹5,00,000', value: '500000'},
            {label: '₹6,00,000', value: '600000'},
            {label: '₹7,00,000', value: '700000'},
            {label: '₹8,00,000', value: '800000'},
            {label: '₹10,00,000', value: '1000000'},
            {label: 'Other', value: 'Other'},
          ]}
          style={styles.MaxSalary}
        />
      </View>
      <TouchableOpacity style={styles.skips}>
        {' '}
        <Text style={styles.skipsText}> Skip</Text> <Svg.ArrowNext />{' '}
      </TouchableOpacity>

      <CustomButton
        title={'Save and Continue'}
        onPress={() => navigation.navigate(MainRoutes.UPLOAD_DOCUMENTS)}
        style={styles.btn}
        textStyle={undefined}
      />
    </ScrollView>
  );
};

export default SkillsAndPreferencesScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_12,
  },
  btn: {
    marginTop: theme.verticalSpacing.space_26,
  },
  JobTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  JobTypeBtn: {
    flexDirection: 'row',
  },
  JobTypeText: {
    marginLeft: theme.horizontalSpacing.space_4,
    color: theme.lightColor.gray,
  },
  JobTypeTitle: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginBottom: theme.verticalSpacing.space_18,
  },
  SalaryRangeTitle: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginTop: theme.verticalSpacing.space_18,
  },
  SalaryRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MinSalary: {
    width: 150,
  },
  MaxSalary: {
    width: 150,
  },
  skips: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.verticalSpacing.space_18,
    marginRight: theme.horizontalSpacing.space_12,
  },
  skipsText: {
    marginRight: theme.horizontalSpacing.space_6,
    fontSize: theme.fontSizes.size_14,
  },

  container: {
    // flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  label: {
    fontSize: theme.fontSizes.size_16,
    color: theme.lightColor.gray,
    marginBottom: 8,
  },
  dropdownButton: {
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
  },
  dropdown: {
    borderColor: '#ccc',
  },
  selectedSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },
  skillButton: {
    backgroundColor: theme.lightColor.gray,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
  },
});
