// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/login/index';
import Register from './src/screens/register/index';
import Home from './src/screens/home/index';
import Menu from './src/screens/popular_menu/index';
import VideoStep from './src/screens/video_step/index';
import Ingredients from './src/screens/ingredients';
import Detailvideo from './src/screens/detail_video';
import Myrecipe from './src/screens/my_recipe';
import Likerecipe from './src/screens/like_recipe';
import Saverecipe from './src/screens/save_recipe';
import Editprofile from './src/screens/edit_profile';
import MyTabs from './src/screens/bottom_tab';
import AddImage from './src/screens/add_image/index';
import OneSignal from 'react-native-onesignal';
import SplashScreen from 'react-native-splash-screen';
import UpdateRecipe from './src/screens/update_recipe';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    OneSignal.setAppId('e890ad25-e1cd-49e2-adb1-89bc97fb0807');
    OneSignal.promptForPushNotificationsWithUserResponse();

    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);

        OneSignal.setNotificationOpenedHandler(notification => {
          console.log('OneSignal: notification opened:', notification);
        });
      },
    );
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="ingredient" component={Ingredients} />
        <Stack.Screen name="video" component={VideoStep} />
        <Stack.Screen name="detailvideo" component={Detailvideo} />
        <Stack.Screen name="editprofile" component={Editprofile} />
        <Stack.Screen name="Myrecipe" component={Myrecipe} />
        <Stack.Screen name="Likerecipe" component={Likerecipe} />
        <Stack.Screen name="Saverecipe" component={Saverecipe} />
        <Stack.Screen name="addimage" component={AddImage} />
        <Stack.Screen name="updaterecipe" component={UpdateRecipe} />
        <Stack.Screen name="menu" component={Menu} />
        <Stack.Screen name="main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
