import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useAuth} from "../../contexts/AuthContext";
import AuthProfile from '../(auth)/auth-profile';
import Login from '../(auth)/login';
import Register from "../(auth)/register";

const ProfileScreen = () => {
    const { user } = useAuth();
    const [authScreen, setAuthScreen] = useState('login');
    if (user) {
        return <AuthProfile />
    }

    return authScreen === 'login' ?
        <Login onSwitch={() => setAuthScreen('register')} /> :
        <Register onSwitch={() => setAuthScreen('login')} />;
}

const styles = StyleSheet.create({})

export default ProfileScreen;
