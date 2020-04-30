import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "oauth3-986c0.firebaseapp.com",
  databaseURL: "https://oauth3-986c0.firebaseio.com",
  projectId: "",
  storageBucket: "oauth3-986c0.appspot.com",
  messagingSenderId: "",
  appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
