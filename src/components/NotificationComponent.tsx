// frontend/src/components/NotificationComponent.tsx
/* eslint-disable */
import React, { useEffect, useState } from "react";
import { messaging, onMessage } from "../firebaseConfig";
import { getToken as getMessagingToken } from "firebase/messaging";

const NotificationComponent: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [permissionRequested, setPermissionRequested] =
    useState<boolean>(false);

  // Function to send the token to your backend
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
    const requestPermissionAndGetToken = async () => {
      // Check if permission has been granted previously
      if (Notification.permission === "granted") {
        if (messaging) {
          const currentToken = await getMessagingToken(messaging, {
            vapidKey:
              "BP7idSgQ1Y7CDUYiBWiyNBnJnem0N_VInVfREcHJbiXRCQMxn3julX8U9kIhXI3nHPfQ4OVd0BzMku752jZPSsk",
          });
          if (currentToken) {
            setToken(currentToken);
            console.log("FCM Registration Token:", currentToken);
            // Send the token to the backend to trigger the welcome message
            sendTokenToServer(currentToken);
          }
        }
      } else if (
        Notification.permission === "default" &&
        !permissionRequested
      ) {
        // Request permission if it hasn't been granted or denied yet
        try {
          const permission = await Notification.requestPermission();
          setPermissionRequested(true);
          if (permission === "granted") {
            window.location.reload(); // Reload to get the token
          }
        } catch (error) {
          console.error("Unable to get permission to notify.", error);
        }
      }
    };

    if ("serviceWorker" in navigator && messaging) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration.scope);
          requestPermissionAndGetToken();
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }

    // Handle foreground notifications
    if (messaging) {
      onMessage(messaging, (payload) => {
        console.log("Foreground Message received:", payload);
      });
    }
  }, [permissionRequested]);

  return (
    <div>
    
    </div>
  );
};

export default NotificationComponent;
