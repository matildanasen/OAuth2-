import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC14P32yiAlGXQc-uVA-jh4LE-6IJrKp-8",
  authDomain: "oauth3-986c0.firebaseapp.com",
  databaseURL: "https://oauth3-986c0.firebaseio.com",
  projectId: "oauth3-986c0",
  storageBucket: "oauth3-986c0.appspot.com",
  messagingSenderId: "247680283452",
  appId: "1:247680283452:web:a5333ff1bf1b3e164be439",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
