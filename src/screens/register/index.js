import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Validasi data
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert('Please fill in all the fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Mengirim data ke server menggunakan Axios
    axios
      .post('http://10.0.2.2:3000/register', {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then(response => {
        alert('Registered successfully');
        // Tanggapan dari server jika sukses
        console.log(response.data);
        // Navigasi ke halaman login setelah berhasil mendaftar
        navigation.navigate('login');
      })
      .catch(error => {
        // Tanggapan dari server jika terjadi kesalahan
        console.error(error);
        alert('Registration failed. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.back}
          source={require('../../assets/images/arrow-left.png')}
        />
      </TouchableOpacity>
      <Text style={styles.welcome}>Let’s Get Started !</Text>
      <Text style={styles.text}>Create new account to access all features</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Create New Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={text => setConfirmPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>CREATE</Text>
      </TouchableOpacity>
      <Text style={styles.signup}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.signupText}>Log in Here</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 13,
  },
  back: {
    marginLeft: 28,
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#EFC81A',
    marginTop: 40,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#C4C4C4',
    marginBottom: 40,
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

export default Register;
