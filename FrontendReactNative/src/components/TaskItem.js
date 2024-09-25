//filename: ShoppingListProj/Frontend-React-Native/src/components/TaskItem.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TaskItem = ({task}) => (
  <View style={styles.item}>
    <Text>{task.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TaskItem;
