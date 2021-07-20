import firebase from "firebase/app";
import "@firebase/firestore";

const fireBase = firebase.initializeApp({
    apiKey: "AIzaSyA8GgHHiQteQe1c-mHX1U5_ZgU-t3hElSs",
    authDomain: "louisa-my-store.firebaseapp.com",
    projectId: "louisa-my-store",
    storageBucket: "louisa-my-store.appspot.com",
    messagingSenderId: "15803128592",
    appId: "1:15803128592:web:78bbf4fd8dba8c376b2395"
  });
export const getFirebase = () => {
    return fireBase;
}

// Funciones de firebase
export const getFirestore = () => {
    return firebase.firestore(fireBase);
}