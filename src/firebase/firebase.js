import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZrG36mfrIA2GKhvrgjtO0czxc9y_j5_Y",
    authDomain: "fir-react-4b709.firebaseapp.com",
    projectId: "fir-react-4b709",
    storageBucket: "fir-react-4b709.appspot.com",
    messagingSenderId: "474992914815",
    appId: "1:474992914815:web:244fd436c42bd7c7bbea4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  