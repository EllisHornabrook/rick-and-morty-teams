import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIOCQwTQ_Bfk0stJdMOO2yjEpKAQls_P4",
    authDomain: "rick-and-morty-6e713.firebaseapp.com",
    databaseURL: "https://rick-and-morty-6e713.firebaseio.com",
    projectId: "rick-and-morty-6e713",
    storageBucket: "rick-and-morty-6e713.appspot.com",
    messagingSenderId: "553294052766",
    appId: "1:553294052766:web:e6cf9dabe870231f4aea8f",
    measurementId: "G-979XQYVZR6"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
