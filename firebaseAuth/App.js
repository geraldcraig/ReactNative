// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBXVOvznXFgKlr4csQ1HzthpvsG7HbEphM",
  authDomain: "whatsapp-test-88143.firebaseapp.com",
  databaseURL: "https://whatsapp-test-88143-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "whatsapp-test-88143",
  storageBucket: "whatsapp-test-88143.appspot.com",
  messagingSenderId: "707595707980",
  appId: "1:707595707980:web:3b339dc53c232d23af76e9"
};

const app = initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Sign Up Successful!');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Sign In Successful!');
        // Navigate to welcome screen
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Enter your password"
      />
      <Button onPress={handleSignUp} title="Sign Up" />
      <Button onPress={handleSignIn} title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
