import React from "react";
import { Button, View } from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { useAuthContext } from "../hooks/useAuthContext";

function Logout({ navigation }) {
    const { dispatch } = useAuthContext();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('user signed out')
                dispatch({ type: 'LOGOUT'})
                navigation.navigate('Login');
            }).catch((error) => {
                const errorMessage = error.message;
                console.log('Sign out error:', errorMessage)
                console.log('error:', error.message);
            });  
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
}

export default Logout;