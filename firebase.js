import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBR8UQ8TMFHioy23fN3NTXzn-dIpyQpunU",
    authDomain: "social-media-demo-36b5f.firebaseapp.com",
    projectId: "social-media-demo-36b5f",
    storageBucket: "social-media-demo-36b5f.appspot.com",
    messagingSenderId: "263460314123",
    appId: "1:263460314123:web:16156227aad0f0ed033b0e",
    measurementId: "G-2H8HGJKN48"
};

//this is what connects us to the db and sets everytt
const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export default { db, auth };