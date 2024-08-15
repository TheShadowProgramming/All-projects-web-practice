// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTdPSgm-hEaoCemtM5pP30FESz_rodKI",
  authDomain: "react-firebase-testing-1dc15.firebaseapp.com",
  projectId: "react-firebase-testing-1dc15",
  storageBucket: "react-firebase-testing-1dc15.appspot.com",
  messagingSenderId: "87655458186",
  appId: "1:87655458186:web:22de4f025dfc5148605473",
  measurementId: "G-42H89S8BG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);