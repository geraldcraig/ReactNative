import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
  const tasks = useTasks();

  return (
    <View>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </View>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <TextInput
          value={task.text}
          onChangeText={text => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: text
              }
            });
          }}
        />
        <Button title="Save" onPress={() => setIsEditing(false)} />
      </>
    );
  } else {
    taskContent = (
      <>
        <Text>{task.text}</Text>
        <Button title="Edit" onPress={() => setIsEditing(true)} />
      </>
    );
  }

  return (
    <View>
      <TouchableOpacity onPress={() => {
        dispatch({
          type: 'changed',
          task: {
            ...task,
            done: !task.done
          }
        });
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginRight: 10 }}>
            <Text>{task.done ? '✓' : '▢'}</Text>
          </View>
          <View>
            {taskContent}
          </View>
        </View>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }} />
    </View>
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
