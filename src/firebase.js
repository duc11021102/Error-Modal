// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REDIRECT_API_KEY,
  authDomain: "fir-firebase-439a6.firebaseapp.com",
  projectId: "fir-firebase-439a6",
  storageBucket: "fir-firebase-439a6.appspot.com",
  messagingSenderId: "550246595052",
  appId: "1:550246595052:web:0ef72195f2e3a05a8fe8c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

