// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiXA2JtQq79nHi2wvEE5gnC0Y--U1V4S0",
  authDomain: "casper-ghost.firebaseapp.com",
  projectId: "casper-ghost",
  storageBucket: "casper-ghost.appspot.com",
  messagingSenderId: "350643749900",
  appId: "1:350643749900:web:558d95c735786588fc9a29",
  measurementId: "G-RXYN3VT1RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);