// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_FIREBASE_API_KEY! as string,
  authDomain: "projectk-4298f.firebaseapp.com",
  projectId: "projectk-4298f",
  storageBucket: "projectk-4298f.appspot.com",
  messagingSenderId: "471801956081",
  appId: "1:471801956081:web:de87096d30c10244a6cb50",
  measurementId: "G-802FS5DQV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);