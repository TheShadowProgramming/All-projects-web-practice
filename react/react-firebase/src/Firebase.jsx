// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYXrutbpWf5zNYk9ZdfIAT4JOty2fc4w0",
  authDomain: "react-firebase-dcc57.firebaseapp.com",
  databaseURL: "https://react-firebase-dcc57-default-rtdb.firebaseio.com",
  projectId: "react-firebase-dcc57",
  storageBucket: "react-firebase-dcc57.appspot.com",
  messagingSenderId: "38235449801",
  appId: "1:38235449801:web:aad77aed840a0438e96018"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);