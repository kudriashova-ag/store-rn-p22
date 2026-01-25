import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../src/ui/Button/Button';

const AuthProfile = () => {
    const { user, logout } = useAuth();

    return (
        <View>
            <Text>AuthProfile</Text>
            <Text>{user.email}</Text>
            <Text>{user.name}</Text>
            <Button text="Logout" onPress={logout} />
        </View>
    );
}

const styles = StyleSheet.create({})

export default AuthProfile;
