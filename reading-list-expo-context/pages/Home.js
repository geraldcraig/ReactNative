import React from 'react';
import { View, StyleSheet } from 'react-native';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { user } = useAuthContext();

  const { documents: books } = useCollection(
    'books',
    ['uid', '==', user.uid]
    );

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
