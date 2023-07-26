import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios
      .post('http://10.0.2.2:3000/login', {
        email: email,
        password: password,
      })
      .then(response => {
        const token = response.data.token;
        AsyncStorage.setItem('token', token) // Simpan token ke AsyncStorage
          .then(() => {
            Alert.alert('Login Successful');
            navigation.navigate('main');
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/potoprofil.png')}
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.text}>Log in to your existing account.</Text>
      <TextInput
        style={styles.input}
        placeholder="examplexxx@gmail.com"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.signup}>
        Don't have an account?
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    height: 60,
    borderColor: '#E5E5E5',
    backgroundColor: '#E5E5E5',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 56,
    marginHorizontal: 28,
    borderRadius: 10,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#EFC81A',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#C4C4C4',
    marginBottom: 40,
  },
  forgot: {
    textAlign: 'right',
    paddingRight: 28,
    marginTop: -8,
    color: '#999999',
  },
  button: {
    backgroundColor: '#EFC81A',
    height: 50,
    marginHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signup: {
    marginTop: 20,
    textAlign: 'center',
    color: '#999999',
  },
  signupText: {
    color: '#EFC81A',
    fontWeight: 'bold',
  },
});

export default Login;
