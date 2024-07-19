import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import convertTo12HourFormat from './timeconverter';

function Clock() {
  return (
    <View>
      <Icon name="clock" size={25} color="rgb(136,136,136)" />
    </View>
  );
}

const ItemDetailsModal = ({isVisible, item, onClose, onComplete}) => {
  const markCompleted = async id => {
    try {
      const response = await fetch(`http://localhost:3005/api/status/${id}`, {
        method: 'PATCH', // Use PATCH method to update the task status
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to mark task as completed');
      }
      onClose(); // Close the modal after marking completed
    } catch (error) {
      console.error('Error marking task as completed:', error);
      // Handle error (show message to user)
    }
  };

  if (!item) {
    return null;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
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
              onPress={() => markCompleted(item._id)}>
              <Text style={styles.completebuttontext}>Mark Completed</Text>
            </TouchableOpacity>
            {/* <Button title="Close" onPress={onClose} /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    flex: 0.25,
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
    // fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'rgb(40,40,40)',
    fontFamily: 'Outfit-SemiBold',
  },
  timeandicon: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
  },
  timetext: {
    color: 'rgb(142,142,142)',
    marginLeft: 5,
    fontFamily: 'Outfit-Regular',
    fontSize: 15,
  },
  descriptext: {
    color: 'rgb(142,142,142)',
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
  },
  descripspace: {
    // padding: 5,
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  completebutton: {
    flex: 0.33,
    backgroundColor: 'rgb(0,109,249)',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  completebuttontext: {
    fontSize: 20,
    //fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Outfit-SemiBold',
  },
});

export default ItemDetailsModal;
