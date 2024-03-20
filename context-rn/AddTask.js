import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useTasksDispatch } from './TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  const handleAddTask = () => {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
    setText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add message"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTask} />
    </SafeAreaView>
  );
}

let nextId = 3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        height: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 8,
        fontSize: 16,
    }
});
