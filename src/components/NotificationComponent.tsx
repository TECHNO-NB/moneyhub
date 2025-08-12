// frontend/src/components/NotificationComponent.tsx
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { messaging, onMessage } from "../firebaseConfig";
import { getToken as getMessagingToken } from "firebase/messaging";

const NotificationComponent: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const sendTokenToServer = async (userToken: string) => {
    try {
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/send-notification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
    const setupNotifications = async () => {
      if ("serviceWorker" in navigator && messaging) {
        try {
          // Register the service worker
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );
          console.log("Service Worker registered:", registration.scope); // Request permission if not already granted

          let permission = Notification.permission;
          if (permission === "default") {
            permission = await Notification.requestPermission();
          }

          if (permission === "granted") {
            // Get the FCM token
            const currentToken = await getMessagingToken(messaging, {
              vapidKey:
                "BP7idSgQ1Y7CDUYiBWiyNBnJnem0N_VInVfREcHJbiXRCQMxn3julX8U9kIhXI3nHPfQ4OVd0BzMku752jZPSsk",
            });
            if (currentToken) {
              setToken(currentToken);
              console.log("FCM Registration Token:", currentToken); // Send token to backend
              sendTokenToServer(currentToken);
            }
          }
        } catch (error) {
          console.error("Error setting up notifications:", error);
        } // Handle foreground messages

        onMessage(messaging, (payload) => {
          console.log("Foreground Message received:", payload);
        });
      }
    };

    setupNotifications();
  }, []);

  return null;
};

export default NotificationComponent;
