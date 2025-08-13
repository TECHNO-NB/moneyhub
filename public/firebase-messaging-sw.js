// public/firebase-messaging-sw.js
/* eslint-disable */
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAhb1EBfJ7baaz4Hf6GIAuV-hyhQmq5nxQ",
  authDomain: "moneyhubstore.firebaseapp.com",
  projectId: "moneyhubstore",
  storageBucket: "moneyhubstore.firebasestorage.app",
  messagingSenderId: "102094803848",
  appId: "1:102094803848:web:56e61033de0527f604203d",
  measurementId: "G-YECPB8KZZX",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/moneyhublogo2.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
