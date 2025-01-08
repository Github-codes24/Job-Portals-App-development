import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../reusableComponents/appHeader/customHeader';
import * as Svg from '../../../assets/images/svg';
import Stepper from './Stepper';
import CustomTextInput from '../../../reusableComponents/customTextInput/customTextInput';
import {theme} from '../../../utils';
import CustomButton from '../../../reusableComponents/button/button';
import {MainRoutes} from '../../../navigation/stackNavigation/routeAndParamsList';
import CustomDatePicker from '../../../reusableComponents/CustomDatePicker/CustomDatePicker';
const WorkExperienceScreen = ({navigation}: any): React.JSX.Element => {
  const [iAmFresher, SetiAmFresher] = useState(false);
  const [showStartDatePicker, SetShowStartDatePicker] = useState(false);
  const [selectedStartDate, SetSelectedStartDate] = useState(null);

  const [showEndDatePicker, SetShowEndDatePicker] = useState(false);
  const [selectedEndDate, SetSelectedEndDate] = useState(null);

  const handleStartDateToggel = () => {
    SetShowStartDatePicker(true);
  };
  const handleEndDateToggel = () => {
    SetShowEndDatePicker(true);
  };
  return (
    <View style={styles.main}>
      <CustomHeader
        title={'Work Experience'}
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => {
          navigation.goBack();
        }}
        rightIcon={undefined}
        onRightPress={undefined}
      />
      <Text style={styles.titleText}>Tell Us About Your Work Experience</Text>
      <Stepper />
      <View style={styles.checkBoxContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => SetiAmFresher(!iAmFresher)}>
            {iAmFresher && (
              <Svg.CheckboxActive color={theme.lightColor.purple} />
            )}
          </TouchableOpacity>
          <Text style={styles.text}>i am a Fresher</Text>
        </View>
      </View>

      <CustomTextInput
        value={undefined}
        onChangeText={undefined}
        placeholder={'Job Title'}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
        numberOfLines={undefined}
      />
      <CustomTextInput
        value={undefined}
        onChangeText={undefined}
        placeholder={'Company Name'}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
        numberOfLines={undefined}
      />

      <CustomDatePicker
        selectedDate={selectedStartDate}
        showDatePicker={showStartDatePicker}
        placeholder={'Start Date'}
        onPress={handleStartDateToggel}
        onConfirm={(date: React.SetStateAction<null>) => {
          if (date) {
            SetSelectedStartDate(date);
          }
          SetShowStartDatePicker(false);
        }}
        onCancel={() => {
          SetShowStartDatePicker(!showStartDatePicker);
        }}
      />
      <CustomDatePicker
        selectedDate={selectedEndDate}
        showDatePicker={showEndDatePicker}
        placeholder={'End Date'}
        onPress={handleEndDateToggel}
        onConfirm={(date: React.SetStateAction<null>) => {
          if (date) {
            SetSelectedEndDate(date);
          }
          SetShowEndDatePicker(false);
        }}
        onCancel={() => {
          SetShowEndDatePicker(!showEndDatePicker);
        }}
      />
      <TouchableOpacity style={styles.WorkingCheck}>
        {' '}
        <Svg.CheckboxInactive />{' '}
        <Text style={styles.WorkingCheckText}>Currently Working Here</Text>{' '}
      </TouchableOpacity>
      <CustomTextInput
        value={undefined}
        onChangeText={undefined}
        placeholder={'Responsibilities'}
        numberOfLines={4}
        multiline={true}
        inputStyle={undefined}
        leftIcon={undefined}
        onLeftIconPress={undefined}
        rightIcon={undefined}
        onRightIconPress={undefined}
        style={undefined}
      />
      <TouchableOpacity style={styles.AddAnotherJob}>
        <Svg.AddIcon />
        <Text style={styles.AddAnotherJobText}> Add Another Job</Text>
      </TouchableOpacity>
      <CustomButton
        title={'Save and Continue'}
        onPress={() => navigation.navigate(MainRoutes.CERTIFICATION_DETAILS)}
        style={styles.btn}
        textStyle={undefined}
      />
    </View>
  );
};

export default WorkExperienceScreen;

const styles = StyleSheet.create({
  main: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  FresherCheck: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  FresherCheckText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  titleText: {
    fontSize: theme.fontSizes.size_18,
    color: theme.lightColor.gray,
    textAlign: 'center',
    marginTop: theme.verticalSpacing.space_12,
  },
  WorkingCheckText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: theme.horizontalSpacing.space_20,
    height: theme.verticalSpacing.space_20,
    borderWidth: 1,
    borderColor: theme.lightColor.purple,
    borderRadius: 5,
  },
  text: {
    fontSize: theme.fontSizes.size_16,
    color: '#00000082',
    marginLeft: 8,
  },
  WorkingCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: theme.verticalSpacing.space_12,
  },
  AddAnotherJobText: {
    paddingLeft: theme.horizontalSpacing.space_10,
  },
  AddAnotherJob: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: theme.verticalSpacing.space_12,
  },
  btn: {
    marginTop: theme.verticalSpacing.space_26,
  },
});
