// ModalForm.js

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

const PopupForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    // Handle form submission here, e.g., send data to backend, etc.

    const toDoData = {
      title: title,
      description: description,
    };

    console.log('TODODATA', toDoData);

    try {
      const response = await fetch('http://localhost:3005/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toDoData),
      });
      console.log(response);
      if (!response.ok) {
        // console.log('OOPS 01');
        throw new Error('Network response was not ok');
      }
      // console.log('HERE 01');
      const data = await response.json();
      console.log('To do saved :', data);
      // Close the modal after submission
      setModalVisible(false);
      // Clear input fields
      setTitle('');
      setDescription('');
    } catch (error) {
      // console.log('OPPS 02');
      console.error('Error saving To do:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.openButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create Todo</Text>
            <TextInput
              style={styles.nameinput}
              placeholder="Task name"
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <TextInput
              style={[styles.desinput]}
              placeholder="Add Description"
              multiline
              value={description}
              onChangeText={text => setDescription(text)}
            />
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  openButton: {
    backgroundColor: 'rgb(0,109,249)',
    borderRadius: 10,
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButtonText: {
    fontSize: 50,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  nameinput: {
    flex: 0.2,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 19,
    borderRadius: 15,
  },
  desinput: {
    flex: 0.6,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  submitButton: {
    flex: 0.2,
    backgroundColor: 'rgb(0,109,249)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  submitButtonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#2196F3',
  },
});

export default PopupForm;
