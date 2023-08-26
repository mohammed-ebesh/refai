// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh0WieJdIUF6tYp2YOc3Dr2NFNLkkzRxY",
  authDomain: "alrefai-619eb.firebaseapp.com",
  projectId: "alrefai-619eb",
  storageBucket: "alrefai-619eb.appspot.com",
  messagingSenderId: "714328610189",
  appId: "1:714328610189:web:d1622237b1baade30d19c4",
  measurementId: "G-R38G889QJ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
