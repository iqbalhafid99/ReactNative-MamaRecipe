import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Video = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageHeader}
        source={require('../../assets/images/header.png')}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/panahkiri.png')} />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <View>
            <Text style={{color: 'white', fontSize: 32, fontWeight: 700}}>
              Sandwich
            </Text>
            <Text style={{color: 'white', fontSize: 32, fontWeight: 700}}>
              with Egg
            </Text>
            <Text style={{color: '#B0B0B0', fontSize: 14, fontWeight: 400}}>
              By Chef Ronald Humson
            </Text>
          </View>
          <View style={styles.like}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/menu/save2.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/images/menu/like.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={styles.main}>
        <View style={styles.judul}>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '500', color: '#18172B'}}>
              Video Step
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ingredient')}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Ingredients</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.konten}>
          <TouchableOpacity
            onPress={() => navigation.navigate('detailvideo')}
            style={styles.video}>
            <Image source={require('../../assets/images/play.png')} />
            <View style={styles.teks}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#666666'}}>
                Step 1
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#B6B6B6'}}>
                Boil egg for 3 menit
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.video}>
            <Image source={require('../../assets/images/play.png')} />
            <View style={styles.teks}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#666666'}}>
                Step 2
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#B6B6B6'}}>
                Prepare the bread, then spread ...
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.video}>
            <Image source={require('../../assets/images/play.png')} />
            <View style={styles.teks}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#666666'}}>
                Step 3
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#B6B6B6'}}>
                Roast beef at medium temperaturet
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.video}>
            <Image source={require('../../assets/images/play.png')} />
            <View style={styles.teks}>
              <Text style={{fontSize: 16, fontWeight: '500', color: '#666666'}}>
                Step 4
              </Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: '#B6B6B6'}}>
                Boil egg for 3 menit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    posisition: 'relative',
  },
  imageHeader: {
    width: '100%',
  },
  header: {
    position: 'absolute',
    marginHorizontal: 28,
    marginTop: 18,
  },
  headerText: {
    marginTop: 180,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 92,
  },
  like: {
    flexDirection: 'row',
    gap: 12,
  },
  main: {
    height: 420,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -140,
  },
  judul: {
    flexDirection: 'row',
    gap: 20,
    margin: 30,
  },
  video: {
    flexDirection: 'row',
    marginHorizontal: 28,
    gap: 30,
    alignItems: 'center',
    backgroundColor: '#FAF7ED',
    padding: 12,
    borderRadius: 15,
  },
  teks: {
    gap: 3,
  },
  konten: {
    display: 'flex',
    gap: 20,
  },
});
