import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color} from 'react-native-elements/dist/helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/credential');
        console.log(response.data);
        setName(response.data.name);
        setImage(response.data.image);
        console.log(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        Alert.alert('Logout Successful');
        navigation.navigate('login');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const profileImageSource = image
    ? {uri: `http://10.0.2.2:3000/${image}`}
    : require('../../assets/images/profile/potoprofil.png');

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.photo} source={profileImageSource} />
          <Text style={styles.teks}>{name}</Text>
        </View>
      </View>
      <View>
        <View style={styles.konten}>
          <TouchableOpacity
            onPress={() => navigation.navigate('editprofile')}
            style={styles.isiKonten}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/profile/profile.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Edit Profile
              </Text>
            </View>
            <Image source={require('../../assets/images/profile/panah.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Myrecipe')}
            style={styles.isiKonten}>
            <View style={{flexDirection: 'row', gap: 18, alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/profile/award.png')}
              />
              <Text style={{fontSize: 14, fontWeight: '700'}}>My Recipe</Text>
            </View>
            <Image source={require('../../assets/images/profile/panah.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Saverecipe')}
            style={styles.isiKonten}>
            <View style={{flexDirection: 'row', gap: 25, alignItems: 'center'}}>
              <Image source={require('../../assets/images/profile/save.png')} />
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Saved Recipe
              </Text>
            </View>
            <Image source={require('../../assets/images/profile/panah.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Likerecipe')}
            style={styles.isiKonten}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <Image source={require('../../assets/images/profile/like.png')} />
              <Text style={{fontSize: 14, fontWeight: '700'}}>
                Liked Recipe
              </Text>
            </View>
            <Image source={require('../../assets/images/profile/panah.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 300,
    backgroundColor: '#EEC302',
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 999,
  },
  konten: {
    backgroundColor: '#FFFFFF',
    height: 512,
    marginHorizontal: 7,
    marginTop: -60,
    borderRadius: 20,
  },
  isiKonten: {
    margin: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  teks: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
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
});
export default Profile;
