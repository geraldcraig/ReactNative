import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';


export default function BookForm() {
    const [newBook, setNewBook] = useState('');
  
    const handleSubmit = async () => {
      console.log(newBook);
  
      try {
        const docRef = await addDoc(collection(db, 'books'), {
          title: newBook
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
  
      setNewBook('');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Add a new book title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          autoCapitalize="none"
          onChangeText={(text) => setNewBook(text)}
          value={newBook}
        />
        <Button title="Add" onPress={handleSubmit} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });
