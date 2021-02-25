// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//   messagingSenderId: "74986552407"
//   });
//   firebase.messaging();
//   //background notifications will be received here
//   firebase.messaging().setBackgroundMessageHandler((payload) => console.log("payload", payload));
// }

importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAwbIboBajPTAfqkVV8SoafMpSXi9D6Tq4",
  authDomain: "nextwebview.firebaseapp.com",
  projectId: "nextwebview",
  storageBucket: "nextwebview.appspot.com",
  messagingSenderId: "74986552407",
  appId: "1:74986552407:web:2c3b6f4e2bddf846c7b712",
  measurementId: "G-E0XTC7W7WP"
});

firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler((payload) => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: '/favicon.ico',
  };
  registration.showNotification(title, options);
});