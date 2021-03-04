import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },

  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAwbIboBajPTAfqkVV8SoafMpSXi9D6Tq4",
        authDomain: "nextwebview.firebaseapp.com",
        projectId: "nextwebview",
        storageBucket: "nextwebview.appspot.com",
        messagingSenderId: "74986552407",
        appId: "1:74986552407:web:2c3b6f4e2bddf846c7b712",
        measurementId: "G-E0XTC7W7WP"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();

        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }

        //requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
          //getting token from FCM
          const fcm_token = await messaging.getToken();
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem('fcm_token', fcm_token);
            //return the FCM token after saving it
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};

export { firebaseCloudMessaging };