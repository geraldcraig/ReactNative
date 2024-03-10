import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const API_KEY = 'AIzaSyBXVOvznXFgKlr4csQ1HzthpvsG7HbEphM';

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://whatsapp-test-88143-default-rtdb.europe-west1.firebasedatabase.app//users.json', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });

      // Handle successful signup
      console.log('User signed up:', response.data);

      // You can add navigation to the next screen or any other action here
    } catch (error) {
      // Handle error
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        autoCapitalize="none"
        onChangeText={text => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        autoCapitalize="none"
        onChangeText={text => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

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
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default SignUpScreen;
