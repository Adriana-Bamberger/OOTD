import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

const SignUpPage = ({ navigation }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    // Implement your sign-up logic here (e.g., send data to server, validate inputs)
    console.log('Signing up with:', { name, username, email, password })
    // Reset fields after sign-up
    setName('')
    setUsername('')
    setEmail('')
    setPassword('')
  }

  const navigateToLogin = () => {
    navigation.navigate('login') // Navigate to LogInPage
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.text}>OOTD.</Text>
        <View style={styles.formContainer}>
          <Text style={styles.title}>REGISTER</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="grey"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="grey"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="grey"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="grey"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/login')} // Navigate back to ProfilePage
          >
            <Text style={styles.login}>Already signed up? Press to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'TYPOGRAPH-PRO-Semi-Bold',
    fontSize: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100, // Adjust this value as needed for spacing
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '70%',
    height: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  login: {
    textDecorationLine: 'underline',
    margin: 10,
  },
})

export default SignUpPage
