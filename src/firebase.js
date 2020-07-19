import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBVwwEiAF9u_pBjqhbOfOl6mhCcTZrRXSc",
    authDomain: "chatroom-582ec.firebaseapp.com",
    databaseURL: "https://chatroom-582ec.firebaseio.com",
    projectId: "chatroom-582ec",
    storageBucket: "chatroom-582ec.appspot.com",
    messagingSenderId: "1066954218797",
    appId: "1:1066954218797:web:e9e385ef64b1724a2087a4"
  };
  // Initialize Firebase
 var firedb = firebase.initializeApp(firebaseConfig);

export default firedb.database().ref();