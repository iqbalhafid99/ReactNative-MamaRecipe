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

const Myrecipe = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [foods, setFoods] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async page => {
      try {
        const response = await axios.get(`http://10.0.2.2:3000/pagination`, {
          params: {
            limit: itemsPerPage,
            page: page,
            sort: sortOrder,
          },
        });
        setFoods(prevState => [...prevState, response.data.foods.rows]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(currentPage);
  }, [currentPage, sortOrder]);

  const goToNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu/back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>All Recipes</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'flex-end',
          marginRight: 40,
        }}>
        <TouchableOpacity onPress={() => setSortOrder('asc')}>
          <Icon name="sort-up" size={40} color={'#EEC302'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSortOrder('desc')}>
          <Icon
            name="sort-down"
            style={{marginTop: -20}}
            size={40}
            color={'#EEC302'}
          />
        </TouchableOpacity>
      </View>
      {foods[currentPage - 1]?.map(food => (
        <View style={styles.konten} key={food.id}>
          <View style={styles.main}>
            <Image
              style={styles.gambar}
              source={{uri: `http://10.0.2.2:3000/${food.image}`}}
            />
            <View style={styles.textMain}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#18172B',
                }}>
                {food.nama_resep}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#6E80B0',
                }}>
                In Veg Pizza
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#18172B',
                }}>
                Spicy
              </Text>
            </View>
            <View style={styles.like}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/menu/save2.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../assets/images/menu/like2.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.pagination}>
        <TouchableOpacity onPress={goToPrevPage} disabled={currentPage === 1}>
          <Text style={styles.paginationButton}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextPage}>
          <Text style={styles.paginationButton}>Next</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: '500',
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
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  paginationButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#F1CD31',
    paddingHorizontal: 8,
  },
});
