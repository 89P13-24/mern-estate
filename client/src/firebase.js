// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5dfbb.firebaseapp.com",
  projectId: "mern-estate-5dfbb",
  storageBucket: "mern-estate-5dfbb.appspot.com",
  messagingSenderId: "464299296389",
  appId: "1:464299296389:web:555b83a7c374fcb757cbec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);