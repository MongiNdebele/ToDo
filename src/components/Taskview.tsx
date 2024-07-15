import React from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

function Clock() {
  return (
    <View>
      <Icon name="clock" size={20} color="rgb(136,136,136)" />
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

const ItemDetailsModal = ({isVisible, item, onClose, onComplete}) => {
  if (!item) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.modalcontainer}>
        <View style={styles.modalcontent}>
          <View style={styles.mdtitletime}>
            <Text style={styles.modalTitle}>{item.title}</Text>
            <View style={styles.timeandicon}>
              <Clock />
              <Text style={styles.timetext}>
                {convertTo12HourFormat(item.updatedAt)}
              </Text>
            </View>
          </View>
          <View style={styles.descripspace}>
            <Text style={styles.descriptext}>{item.description}</Text>
          </View>
          <TouchableOpacity
            style={styles.completebutton}
            onPress={() => onComplete(item.id)}>
            <Text style={styles.completebuttontext}>Mark Completed</Text>
          </TouchableOpacity>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalcontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalcontent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 35,
    width: '100%',
    flex: 0.3,
  },
  mdtitletime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    // backgroundColor: 'pink',
  },
  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'rgb(40,40,40)',
  },
  timeandicon: {
    flexDirection: 'row',
  },
  timetext: {
    color: 'rgb(142,142,142)',
    marginLeft: 5,
  },
  descriptext: {
    color: 'rgb(142,142,142)',
  },
  descripspace: {
    padding: 5,
    // backgroundColor: 'blue',
    flex: 1,
  },
  completebutton: {
    flex: 0.4,
    backgroundColor: 'rgb(0,109,249)',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  completebuttontext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});

export default ItemDetailsModal;

/* import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

interface NoteDetailsProps {
  route: {
    params: {
      title: string;
      description: string;
      updatedAt: string;
    };
  };
}

const NoteDetailsScreen: React.FC<NoteDetailsProps> = ({route}) => {
  const {title, description, updatedAt} = route.params;

  const handleMarkCompleted = () => {
    // Implement logic to mark note as completed
    // For demonstration, let's alert a message
    Alert.alert(`Marking "${title}" as completed`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{updatedAt}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button title="Mark Completed" onPress={handleMarkCompleted} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default NoteDetailsScreen; */
