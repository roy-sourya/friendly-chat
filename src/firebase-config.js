/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCBTrsSq6E7lNSVp3_ZdizYvkjrHS_mym8",
  authDomain: "friendly-chat-2d7cf.firebaseapp.com",
  projectId: "friendly-chat-2d7cf",
  storageBucket: "friendly-chat-2d7cf.appspot.com",
  messagingSenderId: "700375856551",
  appId: "1:700375856551:web:b4e22ff02f3d45fa90b282",
  measurementId: "G-8XD01E330T"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}