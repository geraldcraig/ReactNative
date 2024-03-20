import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <SafeAreaView>
        <Text style={styles.container}>
          Messages
        </Text>
        <AddTask />
        <TaskList />
      </SafeAreaView>
    </TasksProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
