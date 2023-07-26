import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {Alert} from 'react-native';

const Addrecipe = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [value, onChangeText] = useState('');
  const [video, setVideo] = useState('');
  const [response, setResponse] = useState(null);

  const submitRecipe = () => {
    // Persiapkan data yang akan dikirim ke server
    const data = new FormData();
    data.append('nama_resep', title);
    data.append('resep', value);
    data.append('video', '');
    data.append('image', {
      uri: response.assets[0].uri,
      type: 'image/jpeg',
      name: 'recipe_image.jpg',
    });

    // Kirim data ke server menggunakan Axios
    axios
      .post('http://10.0.2.2:3000/insert', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        console.log('Resep berhasil diunggah:', response.data);
        Alert.alert('Add recipe Successful');
      })
      .catch(error => {
        // Tangani error jika gagal
        console.error('Gagal mengunggah resep:', data.image, error);
      });
  };

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

  return (
    <ScrollView>
      <View>
        <Text style={styles.judul}>Add Recipe</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={galleryLaunch}>
          <Text style={styles.buttonText}>Add Image</Text>
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
        </View>
      )}
      <View>
        <TextInput
          style={styles.title}
          placeholder="Title"
          onChangeText={text => setTitle(text)}
          value={title}
        />
        <TextInput
          editable
          multiline
          placeholder="Ingredient"
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.ingredient}
        />
        <TextInput
          style={styles.video}
          placeholder="Add Video"
          onChangeText={text => setVideo(text)}
          value={video}
        />
      </View>
      <TouchableOpacity onPress={submitRecipe} style={styles.button}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      <View style={{paddingBottom: 50}}></View>
    </ScrollView>
  );
};

export default Addrecipe;

const styles = StyleSheet.create({
  judul: {
    fontSize: 24,
    fontWeight: '500',
    color: '#EFC81A',
    textAlign: 'center',
    marginTop: 40,
  },
  title: {
    marginHorizontal: 28,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    marginTop: 40,
    paddingLeft: 60,
    color: 'grey',
  },
  ingredient: {
    marginHorizontal: 28,
    backgroundColor: 'white',
    height: 150,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 60,
    color: 'grey',
  },
  video: {
    marginHorizontal: 28,
    backgroundColor: 'white',
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 60,
    color: 'grey',
  },
  button: {
    backgroundColor: '#EFC81A',
    height: 50,
    marginHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 30,
    width: 185,
    marginLeft: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
