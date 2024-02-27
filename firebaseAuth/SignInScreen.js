import {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import firebase from './firebase';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            // console.log(response.data); // Handle successful sign-in
            navigation.navigate('Welcome');
        } catch (error) {
            console.error('Sign-in error:', error.message);
            // Handle sign-in error
        }
    };

    return (
        <View style={styles.container}>
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
            <Button title="Submit" onPress={handleSignIn}/>
            <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')}/>
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

export default SignInScreen;