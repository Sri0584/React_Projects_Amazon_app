// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0cWUbRJfZaU0sVL1KueqJjT3eDcBhNvc",
  authDomain: "challenge-cb125.firebaseapp.com",
  projectId: "challenge-cb125",
  storageBucket: "challenge-cb125.appspot.com",
  messagingSenderId: "14637085051",
  appId: "1:14637085051:web:3a1877bf02c5a67cf3cdde",
  measurementId: "G-NRJYZVFCH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
