import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UploadDocuments = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleUpload = (docType) => {
    setSelectedDocument(docType);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Supporting Documents</Text>
      <Text style={styles.subtitle}>
        Upload your resume, photo, and additional documents (optional).
      </Text>
      
      <TouchableOpacity
        style={[styles.uploadButton, selectedDocument === 'photo' && styles.selectedButton]}
        onPress={() => handleUpload('photo')}
      >
        <Icon name="cloud-upload" size={16} color="#666" style={styles.icon} />
        <Text style={[styles.buttonText, selectedDocument === 'photo' && styles.selectedText]}>Upload Photo</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.uploadButton, styles.selectedButton]}
        onPress={() => handleUpload('resume')}
      >
        <Icon name="cloud-upload" size={16} color="#666" style={styles.icon} />
        <Text style={[styles.buttonText, styles.selectedText]}>Upload Resume</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => handleUpload('additional')}
      >
        <Icon name="cloud-upload" size={16} color="#666" style={styles.icon} />
        <Text style={styles.buttonText}>Additional Documents (Optional)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 35,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  selectedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  saveButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#6A0DAD',
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UploadDocuments;
