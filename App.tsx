import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/components/Homepage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const screenOptions = () => ({
  headerStyle: {
    backgroundColor: 'rgb(236,241,245)',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'rgb(236,241,245)',
  },
  headerRight: () => (
    <Icon.Button
      name="bell-badge"
      size={25}
      color="black"
      backgroundColor="transparent"
      onPress={() => console.log('Notification button pressed')}
    />
  ),
});

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

/* import React from 'react';
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
    // borderRadius: 50,
  },
  text: {
    fontFamily: 'Outfit-Bold',
    fontSize: 55,
    paddingLeft: 20,
    fontWeight: '600',
    color: 'rgb(44,44,44)',
  },
  todoactuallist: {
    flex: 7,
    backgroundColor: 'rgb(236,241,245)',
  },
});

export default App;
 */
