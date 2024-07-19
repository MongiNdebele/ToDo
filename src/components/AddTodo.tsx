// ModalForm.js

import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

function MyImage() {
  return (
    <Image
      style={styles.openButton}
      source={require('/Users/mongiwandebele/Desktop/ToDoList/Front/MyApp/assets/images/Adjusted2.png')}
    />
  );
}

const PopupForm = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    // Handle form submission here, e.g., send data to backend, etc.
    // add validation e.g. character lengths max 100, description max 350, reject google react native form validation
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
        //style={styles.openButton}
        onPress={() => setModalVisible(true)}>
        <MyImage />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
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
                placeholder="Add description"
                multiline
                value={description}
                onChangeText={text => setDescription(text)}
              />
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
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
    resizeMode: 'cover',
    width: 100,
    height: 100,
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
    borderRadius: 40,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 30,
    marginBottom: 18,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  nameinput: {
    flex: 0.2,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb(230,230,230)',
    padding: 12,
    marginBottom: 19,
    borderRadius: 20,
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
  },
  desinput: {
    flex: 0.55,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb(230,230,230)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: 'rgb(145,145,145)',
    textAlignVertical: 'top',
  },
  submitButton: {
    flex: 0.2,
    backgroundColor: 'rgb(0,109,249)',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Outfit-Medium',
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
