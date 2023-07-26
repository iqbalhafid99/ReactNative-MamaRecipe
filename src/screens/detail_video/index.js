import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Detailvideo = () => {
  return (
    <View>
      <View style={{position: 'relative'}}>
        <Image
          style={{width: '100%'}}
          source={require('../../assets/images/video/video.png')}
        />
        <TouchableOpacity style={{position: 'absolute', top: 100, left: 180}}>
          <Image source={require('../../assets/images/video/play.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 20}}>
          <Image source={require('../../assets/images/video/minimize.png')} />
        </TouchableOpacity>
        <Image
          style={{position: 'absolute', bottom: 0}}
          source={require('../../assets/images/video/Line.png')}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>
              Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then
              mix it
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#AAAAAA',
                marginTop: 8,
              }}>
              3 month ago
            </Text>
          </View>
        </View>
        <ScrollView>
          <TouchableOpacity>
            <View style={{position: 'relative', marginHorizontal: 28}}>
              <Image source={require('../../assets/images/video/video1.png')} />
              <Text style={styles.teks}>[Step 5]</Text>
              <Text style={styles.menit}>3:09</Text>
            </View>
            <View style={{marginHorizontal: 28, marginTop: 14}}>
              <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                Beef Steak with Curry Sauce - [Step 5] {'\n'}
                Saute condiments together until turn brown
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#AAAAAA',
                  marginTop: 8,
                }}>
                3 month ago
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10}}>
            <View style={{position: 'relative', marginHorizontal: 28}}>
              <Image source={require('../../assets/images/video/video2.png')} />
              <Text style={styles.teks}>[Step 6]</Text>
              <Text style={styles.menit}>3:09</Text>
            </View>
            <View style={{marginHorizontal: 28, marginTop: 14}}>
              <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                Beef Steak with Curry Sauce - [Step 6] {'\n'}
                Saute condiments together until turn brown
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#AAAAAA',
                  marginTop: 8,
                }}>
                3 month ago
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 10}}>
            <View style={{position: 'relative', marginHorizontal: 28}}>
              <Image source={require('../../assets/images/video/video2.png')} />
              <Text style={styles.teks}>[Step 7]</Text>
              <Text style={styles.menit}>3:09</Text>
            </View>
            <View style={{marginHorizontal: 28, marginTop: 14}}>
              <Text style={{fontSize: 14, fontWeight: '500', color: 'black'}}>
                Beef Steak with Curry Sauce - [Step 7] {'\n'}
                Saute condiments together until turn brown
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: '#AAAAAA',
                  marginTop: 8,
                }}>
                3 month ago
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detailvideo;

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 28,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  menit: {
    position: 'absolute',
    bottom: 10,
    right: 110,
    backgroundColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 6,
    color: '#F8F8F8',
    fontSize: 10,
  },
  teks: {
    position: 'absolute',
    padding: 10,
    color: '#F8F8F8',
    fontSize: 16,
    fontWeight: '500',
  },
});
