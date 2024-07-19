// Badge.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Badge = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(0,109,249)',
    minWidth: 10,
    height: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'rgb(0,109,249)',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Badge;
