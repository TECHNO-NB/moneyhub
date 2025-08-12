import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  Messaging,
} from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAhb1EBfJ7baaz4Hf6GIAuV-hyhQmq5nxQ",
  authDomain: "moneyhubstore.firebaseapp.com",
  projectId: "moneyhubstore",
  storageBucket: "moneyhubstore.firebasestorage.app",
  messagingSenderId: "102094803848",
  appId: "1:102094803848:web:56e61033de0527f604203d",
  measurementId: "G-YECPB8KZZX",
};

const app = initializeApp(firebaseConfig);

let messaging: Messaging | null = null;

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  messaging = getMessaging(app);
}

export { messaging, getToken, onMessage };
