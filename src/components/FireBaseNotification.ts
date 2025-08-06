// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAhb1EBfJ7baaz4Hf6GIAuV-hyhQmq5nxQ",
  authDomain: "moneyhubstore.firebaseapp.com",
  projectId: "moneyhubstore",
  storageBucket: "moneyhubstore.firebasestorage.app",
  messagingSenderId: "102094803848",
  appId: "1:102094803848:web:56e61033de0527f604203d",
  measurementId: "G-YECPB8KZZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const generateToken = async () => {
  const permisson = await Notification.requestPermission();
  if (permisson === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BP7idSgQ1Y7CDUYiBWiyNBnJnem0N_VInVfREcHJbiXRCQMxn3julX8U9kIhXI3nHPfQ4OVd0BzMku752jZPSsk",
    });
    onMessage(messaging, (payload) => {
      console.log("Message received. ", token, payload);
    });
    console.log("token", token);
  }
};
