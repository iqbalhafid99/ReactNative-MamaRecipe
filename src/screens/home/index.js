import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/food');
        setFoods(response.data.payload.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:3000/foods/search?query=${searchQuery}`,
      );
      setFoods(response.data.payload.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Pasta, Bread, etc"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
          <Icon name="search" size={20} color={'#EEC302'} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.judul}>New Recipes</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.gambar}>
          {foods.map(food => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ingredient')}
              style={styles.slide}
              key={food.id}>
              <Image
                style={styles.konten}
                source={{uri: `http://10.0.2.2:3000/${food.image}`}}
              />
              <Text style={styles.teks}>{food.nama_resep}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View>
        <Text style={styles.judul}>Popular Recipes</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('menu')}
          style={styles.menu}>
          <Image source={require('../../assets/images/menu3.png')} />
          <View>
            <Text style={styles.teksMenu}>Orange La Pasta</Text>
            <View style={styles.itemsMenu}>
              <Image source={require('../../assets/images/star.png')} />
              <Text style={{fontWeight: '500', color: '#18172B'}}>4.6</Text>
              <Text>Pasta</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.menu}>
          <Image source={require('../../assets/images/menu2.png')} />
          <View>
            <Text style={styles.teksMenu}>Spicy Ramenyu </Text>
            <View style={styles.itemsMenu}>
              <Image source={require('../../assets/images/star.png')} />
              <Text style={{fontWeight: '500', color: '#18172B'}}>4.4</Text>
              <Text>Korean</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <Image source={require('../../assets/images/menu1.png')} />
          <View>
            <Text style={styles.teksMenu}>Lobster Toast</Text>
            <View style={styles.itemsMenu}>
              <Image source={require('../../assets/images/star.png')} />
              <Text style={{fontWeight: '500', color: '#18172B'}}>4.3</Text>
              <Text>Seafood</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 45,
    left: 45,
  },
  searchBar: {
    marginTop: 30,
    width: '86%',
    borderRadius: 15,
    paddingLeft: 48,
    height: 50,
    backgroundColor: '#EFEFEF',
    borderColor: '#EFEFEF',
    borderWidth: 1,
  },
  judul: {
    textAlign: 'left',
    marginHorizontal: 28,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3F3A3A',
  },
  gambar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    marginTop: 20,
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 30,
    marginHorizontal: 28,
  },
  konten: {
    position: 'relative',
    width: 150,
    height: 200,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  teks: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    color: '#EFC81A',
    fontSize: 14,
    fontWeight: '700',
  },
  teksMenu: {
    color: '#18172B',
    fontSize: 16,
    fontWeight: '500',
  },
  itemsMenu: {
    paddingTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
  },
});

export default Home;
