//filename: ShoppingListProj/Frontend-React-Native/src/App.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TaskListScreen from './screens/TaskListScreen';


const App = () => (
  <SafeAreaView style={styles.container}>
      <TaskListScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;