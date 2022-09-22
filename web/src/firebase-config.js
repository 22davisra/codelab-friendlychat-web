/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyA1UOO7bIs3AQu9Ntj5x8o9QaF4aA6_jv0",
  authDomain: "friendlychat-1ba43.firebaseapp.com",
  projectId: "friendlychat-1ba43",
  storageBucket: "friendlychat-1ba43.appspot.com",
  messagingSenderId: "174321650160",
  appId: "1:174321650160:web:366c60c5512ad21361b535"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
