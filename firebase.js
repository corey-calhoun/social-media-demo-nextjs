import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgvTB76mK3l6cGjkgxn8DDo6PsVFsvxj8",
    authDomain: "social-network-v1-d7307.firebaseapp.com",
    projectId: "social-network-v1-d7307",
    storageBucket: "social-network-v1-d7307.appspot.com",
    messagingSenderId: "1005972028417",
    appId: "1:1005972028417:web:a0262648a5231f073c9400",
    measurementId: "G-FF6LKZ7GN5"
};

//this is what connects us to the db and sets everytt
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };