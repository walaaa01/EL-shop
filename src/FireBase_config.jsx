// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNtfU3zwHhFiBo7ECUw626wm9URDJtkr8",
  authDomain: "e-shop-d1258.firebaseapp.com",
  projectId: "e-shop-d1258",
  storageBucket: "e-shop-d1258.appspot.com",
  messagingSenderId: "945915717860",
  appId: "1:945915717860:web:4c475bc6466f24eab324f1",
  measurementId: "G-03FMSP3RM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)