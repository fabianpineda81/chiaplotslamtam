import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDyRrEUvLF4EacH0IIEgGW_WOYiusJ7qG0",
    authDomain: "chia-explots.firebaseapp.com",
    projectId: "chia-explots",
    storageBucket: "chia-explots.appspot.com",
    messagingSenderId: "49833670325",
    appId: "1:49833670325:web:09ade1c7999e9360b6f0fc",
    measurementId: "G-5FHYYQ3G2H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore()
  const storage= firebase.storage()
  const auth=firebase.auth()

  export {db,auth,storage}