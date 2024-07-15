import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemDetailsModal from './Taskview';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ToDoNote {
  _id: string; // Assuming your backend returns a unique ID like _id
  title: string;
  description: string;
  updatedAt: string;
  complete: boolean;
}

function Tick({complete}: {complete: boolean}) {
  return (
    <View>
      {complete ? (
        <Icon
          name="checkbox-multiple-marked-circle"
          size={30}
          color="rgb(0,109,249)"
          style={{paddingRight: 10}}
        />
      ) : (
        <Icon
          name="checkbox-multiple-blank-circle-outline"
          size={30}
          color="rgb(0,109,249)"
          style={{paddingRight: 10}}
        />
      )}
    </View>
  );
}

function convertTo12HourFormat(time) {
  let time24 = time.substr(11, 5);
  // Extract hours and minutes from the 24-hour time string
  let [hours, minutes] = time24.split(':');

  // Convert hours from string to number
  hours = parseInt(hours, 10);

  // Determine the period (AM or PM)
  let period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  // Format the hours and minutes with leading zeros if necessary
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  // Construct the 12-hour formatted time string
  return `${hours}:${minutes} ${period}`;
}

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
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          // <View style={styles.alist}>
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
          // </View>
        )}
      />
      <ItemDetailsModal
        isVisible={modalVisible}
        item={selectedItem}
        onClose={closeModal}
        onComplete={markCompleted}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  tick: {
    padding: 10,
    flexDirection: 'row',
  },
  alist: {
    flex: 1,
    borderColor: 'black',
    borderRadius: 30,
    padding: 10,
  },
  noteContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    flex: 2,
    width: '100%',
  },
  title: {
    fontFamily: 'Lexend-Medium',
    fontSize: 20,
    fontWeight: 'semibold',
  },
  description: {
    fontFamily: 'Lexend-Medium',
    fontSize: 16,
    color: 'rgb(136,136,136)',
    paddingLeft: 50,
  },
});

export default ToDoList;

// style={styles.container}
// style={styles.noteContainer}
