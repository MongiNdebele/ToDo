import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import ItemDetailsModal from './Taskview';
import convertTo12HourFormat from './timeconverter';
import Tick from './Icons';
import {ToDoNote} from './types';
import styles from '/Users/mongiwandebele/Desktop/ToDoList/Front/MyApp/src/components/DisplayToDoStyles.tsx';

const ToDoList: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [notes, setNotes] = useState<ToDoNote[]>([]);

  const openModal = item => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const closeModal = () => {
    setSelectedItem(null);
    setModalVisible(false);
  };
  const markCompleted = () => {
    // Implement your logic to mark task as completed in the database
    // For example, you might make an API call here
    console.log('Task marked as completed:', selectedItem.title);
    setModalVisible(false); // Close the modal after marking completed
  };
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/getAll');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ToDoNote[] = await response.json();
        setNotes(data); // Set the retrieved notes to the state
      } catch (error) {
        console.error('Error fetching To Do List:', error);
        // Optionally handle error (show message to user)
      }
    };

    fetchNotes(); // Call the fetchNotes function when component mounts
  }, [closeModal]); // Empty dependency array ensures useEffect runs only once

  return (
    <>
      <FlatList
        data={notes}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => openModal(item)}>
            <View style={styles.alist}>
              <View style={styles.noteContainer}>
                <View style={styles.tick}>
                  <Tick complete={item.complete} />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Text style={styles.description}>
                  {convertTo12HourFormat(item.updatedAt)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        scrollEnabled={true}
      />
      <ItemDetailsModal
        isVisible={modalVisible}
        item={selectedItem}
        onClose={closeModal}
        onComplete={markCompleted}
      />
    </>
  );
};

export default ToDoList;

// style={styles.container}
// style={styles.noteContainer}
