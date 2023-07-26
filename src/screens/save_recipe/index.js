import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';

const Saverecipe = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/menu/back.png')} />
        </TouchableOpacity>
        <Text style={styles.text}>Save Recipe</Text>
      </View>

      <View style={styles.konten}>
        <View style={styles.main}>
          <Image source={require('../../assets/images/menu/menu.png')} />
          <View style={styles.textMain}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#18172B'}}>
              Margherita
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#6E80B0'}}>
              In Veg Pizza
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#18172B'}}>
              Spicy
            </Text>
          </View>
        </View>
        <View style={styles.main}>
          <Image source={require('../../assets/images/menu/menu1.png')} />
          <View style={styles.textMain}>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#18172B'}}>
              Veg Loaded
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#6E80B0'}}>
              In Pizza Mania
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#18172B'}}>
              Spicy
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Saverecipe;

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
    marginHorizontal: 24,
  },
  like: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  textMain: {
    display: 'flex',
    gap: 5,
    marginLeft: 20,
  },
});
