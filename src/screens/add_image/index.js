/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
// import style from './style';

const Camera = ({route, navigation}) => {
  const [response, setResponse] = React.useState(null);

  const requestPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permissions',
          message: 'App Need Camera',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask me Later',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('access success');
        cameraLaunch();
      } else {
        console.log('access failure');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response camera =', res);
      if (res.didCancel) {
        console.log('user cancle image');
      } else if (res.errorMessage) {
        console.log('image picker error');
      } else {
        console.log(res);
        setResponse(res);
      }
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
        console.log('user cancle image');
      } else if (res.errorMessage) {
        console.log('gallery picker error');
      } else {
        console.log(res);
        setResponse(res);
      }
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Camera Screen</Text>

      <TouchableOpacity
        style={{backgroundColor: 'violet'}}
        onPress={() => requestPermissions()}>
        <Text>Camera !</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{backgroundColor: 'yellow'}}
        onPress={() => galleryLaunch()}>
        <Text>Gallery !</Text>
      </TouchableOpacity>

      {response && (
        <View>
          <Image
            style={{width: 300, height: 300}}
            resizeMode="cover"
            source={{uri: response.assets[0].uri}}
          />
        </View>
      )}
    </View>
  );
};

export default Camera;
