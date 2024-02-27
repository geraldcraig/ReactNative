import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import firebase from "./firebase";

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            // console.log(response.data); // Handle successful sign-up
            navigation.navigate('Welcome');
        } catch (error) {
            console.error('Sign-up error:', error.message);
            // Handle sign-up error
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                onChangeText={(newText) => setFirstName(newText)}
                defaultValue={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                onChangeText={(newText) => setLastName(newText)}
                defaultValue={lastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={(newText) => setEmail(newText)}
                defaultValue={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(newText) => setPassword(newText)}
                defaultValue={password}
            />
            <Button title="Submit" onPress={handleSignUp} />
            <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
        </View>
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

export default SignUpScreen;