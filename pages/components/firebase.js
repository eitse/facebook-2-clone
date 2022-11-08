// This Firebase Config is compartable for Firebase V9

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage, ref } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfJGS20jgfMC7LH21HbCtplnZhFxhQM3s",
  authDomain: "eitsefacebook.firebaseapp.com",
  projectId: "eitsefacebook",
  storageBucket: "eitsefacebook.appspot.com",
  messagingSenderId: "600048883069",
  appId: "1:600048883069:web:4ad6aaf17a129612bde814",
};

// Use this Initialize Firebase Syntax for NextJs with Condition to check of we have rendered it on the server already
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

//Make sure to setup a Firestore Db @ google.firestore Before Initializing db
const db = app.firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

// const storageRef = ref(storage);

export { db, storage};
