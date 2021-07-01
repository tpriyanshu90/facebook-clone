import firebase from "firebase";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "facebook-clone-tp9",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 
const db = app.firestore()
const storage = firebase.storage();

export {db, storage};
