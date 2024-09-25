//filename: ShoppingListProj/Frontend-React-Native/src/screens/TaskListScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet, Keyboard, Alert } from 'react-native';
import { getTasks, addTask } from '../services/api';
import TaskItem from '../components/TaskItem';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await addTask({ name: newTask });
        setTasks([...tasks, response.data]); // Optimistically update task list
        setNewTask('');
        Keyboard.dismiss(); // Dismiss keyboard after adding task
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to add task');
      }
    } else {
      Alert.alert('Validation', 'Task cannot be empty');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold', // This makes the text bold
    marginBottom: 20,
  },
});

export default TaskListScreen;