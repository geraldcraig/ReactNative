import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore';

export default function BookList({ books }) {

const handleClick = async (id) => {
    console.log(id);
    const docRef = doc(db, 'books', id);
    await deleteDoc(docRef);
  };

  return (
    <View style={styles.bookList}>
      <Text>Book List</Text>
      <View>
        {books.map(book => (
          <TouchableOpacity key={book.id} onPress={() => handleClick(book.id)}>
            <Text>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    bookList: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
