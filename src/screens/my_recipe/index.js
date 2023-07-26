import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {Alert} from 'react-native';

const Myrecipe = ({navigation}) => {
  const [foods, setFoods] = useState([]);

  const handleDelete = () => {
    axios
      .delete(`http://10.0.2.2:3000/destroy/49`)
      .then(response => {
        console.log(response);
        Alert.alert('Delete success!');
      })
      .catch(err => {
        // Tambahkan logika tambahan yang diinginkan jika penghapusan gagal
        console.log(err.message + ' ini gagal');
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/food-user');
        setFoods(response.data.payload.data); // Menyimpan data ke state 'foods'
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu/back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>My recipe</Text>
      </View>
      {foods.map(food => (
        <View style={styles.konten} key={food.id}>
          <View style={styles.main}>
            <Image
              style={styles.gambar}
              source={{uri: `http://10.0.2.2:3000/${food.image}`}}
            />
            <View style={styles.textMain}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#18172B'}}>
                {food.nama_resep}
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#6E80B0'}}>
                In Veg Pizza
              </Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: '#18172B'}}>
                Spicy
              </Text>
            </View>
            <View style={styles.like}>
              <TouchableOpacity>
                <Icon
                  onPress={handleDelete}
                  name="trash"
                  size={32}
                  color={'#EEC302'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  onPress={() => navigation.navigate('updaterecipe')}
                  name="pencil"
                  size={30}
                  color={'#EEC302'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Myrecipe;

const styles = StyleSheet.create({
  container: {
    height: 1000,
    backgroundColor: 'white',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 70,
    margin: 24,
  },
  gambar: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
    color: '#F1CD31',
  },
  konten: {
    display: 'flex',
    gap: 32,
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 24,
  },
  like: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  textMain: {
    display: 'flex',
    marginLeft: -45,
    gap: 5,
  },
});
