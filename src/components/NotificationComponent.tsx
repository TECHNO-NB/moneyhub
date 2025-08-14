/* eslint-disable */
import React, { useEffect, useState } from "react";
import { messaging, onMessage } from "../firebaseConfig";
import { getToken as getMessagingToken } from "firebase/messaging";
import axios from "axios";
import { useSelector } from "react-redux";

const NotificationComponent: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const user = useSelector((state: any) => state.user);

  const savedTokenToDb = async (token: string) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/token`,
        { token },
        { withCredentials: true }
      );
      console.log("Token saved to database:", res.data);
    } catch (error) {
      console.error("Error saving token to database:", error);
    }
  };

  const sendTokenToServer = async (userToken: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-notification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            token: userToken,
            title: "Welcome to MoneyHub!",
            body: "You'll now receive updates from us.",
          }),
        }
      );

      if (response.ok) {
        console.log("Welcome notification sent successfully!");
      } else {
        console.error("Failed to send welcome notification.");
      }
    } catch (error) {
      console.error("Error sending welcome notification:", error);
    }
  };

  useEffect(() => {
    // ✅ Run only if user is logged in and has NO token saved
    if (!user || !user.id || user.token) return;

    const setupNotifications = async () => {
      if ("serviceWorker" in navigator && messaging) {
        try {
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );
          console.log("Service Worker registered:", registration.scope);

          let permission = Notification.permission;
          if (permission === "default") {
            permission = await Notification.requestPermission();
          }

          if (permission === "granted") {
            const currentToken = await getMessagingToken(messaging, {
              vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
            });

            if (currentToken) {
              setToken(currentToken);
              await savedTokenToDb(currentToken);
              await sendTokenToServer(currentToken);
              console.log("FCM Registration Token:", currentToken);
            }
          }
        } catch (error) {
          console.error("Error setting up notifications:", error);
        }

        onMessage(messaging, (payload) => {
          console.log("Foreground Message received:", payload);
        });
      }
    };

    setupNotifications();
  }, [user]); // Runs only when user changes

  return null;
};

export default NotificationComponent;
