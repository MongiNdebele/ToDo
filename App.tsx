import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PopupForm from './src/components/AddTodo';
import ToDoList from './src/components/DisplayTodo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/FontAwesome6';

function Bell() {
  return (
    <View>
      <Icon name="bell-badge" size={25} color="black" />
    </View>
  );
}

function Menu() {
  return (
    <View>
      <Ionic name="bars" size={25} color="black" />
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Icons}>
        <Menu />
        <Bell />
      </View>
      <Text style={styles.text}>Today</Text>
      <View style={styles.todoactuallist}>
        <ToDoList />
      </View>
      <PopupForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  container: {
    backgroundColor: 'rgb(236,241,245)',
    flex: 1,
  },
  text: {
    fontFamily: 'Lexend-Medium',
    fontSize: 50,
    paddingLeft: 10,
  },
  todoactuallist: {
    flex: 6,
    backgroundColor: 'rgb(236,241,245)',
  },
});

export default App;
