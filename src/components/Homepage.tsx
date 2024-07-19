import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PopupForm from '/Users/mongiwandebele/Desktop/ToDoList/Front/MyApp/src/components/AddTodo.tsx';
import ToDoList from '/Users/mongiwandebele/Desktop/ToDoList/Front/MyApp/src/components/DisplayTodo';
import Badge from './badge';

function Home() {
  const badgeCount = 3;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Today</Text>
      <View style={styles.todoactuallist}>
        <ToDoList />
      </View>
      <View style={styles.popup}>
        <PopupForm />
      </View>
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
    //borderRadius: 50,
  },
  textcontainer: {},
  text: {
    fontFamily: 'Outfit-Bold',
    fontSize: 55,
    paddingLeft: 20,
    fontWeight: '600',
    color: 'rgb(44,44,44)',
  },
  todoactuallist: {
    flex: 6,
    backgroundColor: 'rgb(236,241,245)',
    marginTop: 20,
  },
  popup: {
    position: 'absolute',
    bottom: -0.3,
    right: 0,
  },
});

export default Home;
