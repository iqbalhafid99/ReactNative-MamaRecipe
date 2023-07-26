import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const EditProfile = () => {
  const [response, setResponse] = React.useState(null);
  // const [userId, setUserId] = React.useState('');

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      console.log('response camera=', res);
      if (res.didCancel) {
        console.log('user cancel image');
      } else if (res.errorMessage) {
        console.log('gallery picker error');
      } else {
        console.log(res.assets[0].uri);
        setResponse(res);
      }
    });
  };

  const submitProfilePhoto = async () => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: response.assets[0].uri,
        type: 'image/jpeg',
        name: 'recipe_image.jpg',
      });

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      await axios.put(`http://10.0.2.2:3000/add-photo/1`, formData, config);
      console.log('Photo profile updated successfully!');
      Alert.alert('sukses mengubah foto profile');
    } catch (error) {
      console.error('Failed to update photo profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu/back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Edit Profile</Text>
      </View>

      <View style={styles.main}>
        <TouchableOpacity style={styles.content} onPress={galleryLaunch}>
          <Text style={{marginBottom: 12}}>Change Profile Picture</Text>
          <Image source={require('../../assets/images/line1.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <Text style={{marginBottom: 12}}>Change Password</Text>
          <Image source={require('../../assets/images/line1.png')} />
        </TouchableOpacity>
      </View>

      {response && (
        <View>
          <Image
            style={{
              marginTop: 30,
              marginLeft: 118,
              width: 150,
              height: 150,
            }}
            resizeMode="cover"
            source={{uri: response.assets[0].uri}}
          />
          <TouchableOpacity style={styles.button} onPress={submitProfilePhoto}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: 'white',
    position: 'relative',
  },
  button: {
    backgroundColor: '#EFC81A',
    height: 40,
    marginHorizontal: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 70,
    margin: 24,
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
    color: '#F1CD31',
  },
  main: {
    marginHorizontal: 28,
    display: 'flex',
    gap: 11,
  },
  content: {},
});
