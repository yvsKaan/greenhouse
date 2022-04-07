import React, { useState } from 'react'

import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                placeholder='Email' 
                value={email} 
                onChangeText={text => setEmail(text)} 
                />
                <TextInput style={styles.input}
                placeholder='Password' 
                value={password} 
                onChangeText={text => setPassword(text)} 
                secureTextEntry
                />
                
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginBtn} activeOpacity={0.6}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.registerBtn} activeOpacity={0.6}>
                        <Text style={styles.registerText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    loginBtn: {
        width: '100%',
        backgroundColor: '#25C050',
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    loginText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    registerBtn: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        marginTop: 10,
        borderColor: '#25C050',
        borderWidth: 1,
    },
    registerText:{
        textAlign: 'center',
        color: '#25C050',
        fontSize: 16,
        fontWeight: '700'
    }
});