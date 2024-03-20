import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </View>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleTextChange = newText => {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        text: newText,
      },
    });
  };

  const handleToggleDone = () => {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        done: !task.done,
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'deleted',
      id: task.id,
    });
  };

  return (
    <SafeAreaView >
        <View >
        <TouchableOpacity onPress={handleToggleDone}>
          <Text>{task.done ? '✓' : '◻'}</Text>
        </TouchableOpacity>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={task.text}
            onChangeText={handleTextChange}
            autoFocus
            onBlur={handleToggleEdit}
          />
        ) : (
          <Text>{task.text}</Text>
        )}
        <Button title={isEditing ? 'Save' : 'Edit'} onPress={handleToggleEdit} />
      </View>
      <Button title="Delete" onPress={handleDelete} />
    </SafeAreaView>
  );
}

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
