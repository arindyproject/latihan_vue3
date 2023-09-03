// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAlpUfFOP4xcVSGsuzhe2IaRncC62N-o",
  authDomain: "vue3latihan.firebaseapp.com",
  projectId: "vue3latihan",
  storageBucket: "vue3latihan.appspot.com",
  messagingSenderId: "629996592746",
  appId: "1:629996592746:web:2eea8ac368c306e698b413",
  measurementId: "G-S3CMGF275V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export { app, auth }