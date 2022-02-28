import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGa9RLGlYPiPVTgv0PL_8GpB3gdwos5Sw",
  authDomain: "chat-app-45660.firebaseapp.com",
  projectId: "chat-app-45660",
  storageBucket: "chat-app-45660.appspot.com",
  messagingSenderId: "853799413631",
  appId: "1:853799413631:web:c2b4c20bac62de2e225c4a",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
