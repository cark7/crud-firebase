import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBJ-0Dkw-mqBl4kYfZnzv-4WA2AG-KNMyk",
    authDomain: "crud-firebase-b85d0.firebaseapp.com",
    databaseURL: "https://crud-firebase-b85d0.firebaseio.com",
    projectId: "crud-firebase-b85d0",
    storageBucket: "crud-firebase-b85d0.appspot.com",
    messagingSenderId: "1051302184166",
    appId: "1:1051302184166:web:f3c13f8b7bad72598ea727"
  };
  // Initialize Firebase

//firebase.initializeApp(firebaseConfig);
const fb = firebase.initializeApp(firebaseConfig);
//const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()
