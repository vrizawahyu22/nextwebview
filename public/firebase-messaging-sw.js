importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');

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
  console.log("PAYLOAD NJINGGG", payload);
  alert("Hello! I am an alert box!");
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
    icon: '/favicon.ico',
  };
  
  self.registration.showNotification(title, options);
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

messaging.onMessage((message) => {
  // setIniMessage(message);
  console.log("MASUK SINI DONG");
  alert(message);
  const { title, body } = JSON.parse(message.data.notification);
  var options = {
    body,
  };
  self.registration.showNotification(title, options);
});