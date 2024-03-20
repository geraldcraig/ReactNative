import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';

import { useCollection } from "../hooks/useCollection";

export default function Home() {
    const { documents: books } = useCollection('books')

  return (
    <View style={styles.container}>
      {books && <BookList books={books} />}
      <BookForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
