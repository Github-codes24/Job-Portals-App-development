import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Svg from "../../assets/images/svg";
import CustomHeader from '../../reusableComponents/appHeader/customHeader';

const JobOverviewScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left: Menu Icon & Company Logo */}
        <View style={styles.headerLeft}>
          <Svg.MenuIcon color="#000" size={30} />
          <Image source={require('../../assets/images/technoKrate.png')} style={styles.logo} />
        </View>

        {/* Right: Bell Icon & Infosys Title */}
        <View style={styles.headerRight}>
          <Svg.BellIcon1 color="#000" size={27} />
          {/* <Svg.InfosysTitle style={styles.headerTitle} /> */}
          <Image source={require('../../assets/images/InfosysTitle.png')} />
        </View>
      </View>

      {/* Job Overview */}
      {/* <Text style={styles.title}>Job Overview</Text> */}

      <CustomHeader
        title="Job Overview"
        leftIcon={<Svg.ArrowBack />}
        onLeftPress={() => navigation.navigate('ViewJobsScreen')}
        rightIcon={undefined}
        onRightPress={undefined}
      />

      <View style={styles.card}>
        <View style={styles.companyInfo}>
          {/* Company Logo with Title Overlay */}
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/images/Infosys.png')} style={styles.companyLogo} />
            <View style={styles.overlayContainer}>
              <Text style={styles.titleOverlay}>
                <Svg.InfosysTitle size={40} />
              </Text>
            </View>
          </View>

          {/* Company Details */}
          <View>
            <Text style={styles.companyName}>Infosys</Text>
            <View style={styles.locationContainer}>
              <Svg.LocationIcon />
              <Text style={styles.location}>Pune, Maharashtra</Text>
            </View>
          </View>

          <View style={styles.edit}>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => navigation.navigate('EditJobScreen')}
            >
              <Svg.EditIcon />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.position}>Jr. UI/UX Designer</Text>
        <Text style={styles.jobDetails}>Full Time • 30K- 35K</Text>
        <View style={styles.expireContainer}>
          <Text style={styles.expire}>Job expires in: </Text>
          <Text style={styles.expireDate}>June 30, 2021</Text>
        </View>

      </View>

      {/* Job Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>Degree: Bachelor's, Master's, Ph.D., etc.</Text>
        <Text style={styles.text}>Field of Study: Engineering, Marketing, IT, etc.</Text>

        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.text}>Minimum Required Experience: (2+ years)</Text>
        <Text style={styles.text}>Preferred Experience Range: (2–5 years)</Text>

        <Text style={styles.sectionTitle}>Job Type</Text>
        <Text style={styles.text}>Full-Time</Text>

        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.text}>Dehradun</Text>

        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.text}>
          Figma, Prototype, Wireframing, Protopie, Adobe XD, Adobe Illustrator, User Research, Photoshop, Canva
        </Text>

        <Text style={styles.sectionTitle}>Job Description</Text>
        <Text style={styles.text}>
          We are seeking a creative and experienced Senior UX Designer to lead the design of engaging, user-friendly mobile applications.You will collaborate with cross-functional teams to deliver intuitive and visually appealing designs that enhance user experiences.
        </Text>

        <Text style={styles.sectionTitle}>Responsibilities</Text>
        <Text style={styles.text}>• Conduct user research to understand target audience needs and behaviours.</Text>
        <Text style={styles.text}>• Develop wireframes, prototypes, high-fidelity designs for mobile applications.</Text>
        <Text style={styles.text}>• Collaborate with product managers, developers, and other stakeholders to align on user-centric solutions.</Text>
        <Text style={styles.text}>• Iterate designs based on user feedback, analytics, and usability testing.</Text>
        <Text style={styles.text}>• Stay updated with the latest UX trends and implement best practices in design projects.</Text>
        <Text style={styles.text}>• Mentor junior designers and foster a culture of innovation within the team.</Text>
      </View>

      {/* Confirm and Post Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JobPostSuccessScreen')}>
        <Text style={styles.buttonText}>Confirm and Post →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logo: {
    width: 130,
    height: 48,
    resizeMode: 'contain',
    marginLeft: 10
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  card: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20
  },

  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },

  imageContainer: {
    position: 'relative',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    resizeMode: 'contain'
  },

  overlayContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleOverlay: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
  },

  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom:-3,
  },

  location: {
    fontSize: 14,
    color: '#757575',
    flexDirection: 'row',
    marginLeft: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },

  editIcon: {
    marginLeft: 'auto',
    marginTop: -35,
  },

  position: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },

  jobDetails: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5
  },

  expire: {
    fontSize: 14,
    color: '#757575'
  },

  expireDate: {
    color: 'red',
    fontWeight: 'bold'
  },
  expireContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailsContainer: {
    marginBottom: 20
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15
  },

  text: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5
  },

  button: {
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  headerTitle: {
    marginLeft: 10,
    width: 60,
    height: 20,
    resizeMode: 'contain'
  },
  edit: {
    flex: 1,
    //backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default JobOverviewScreen;



