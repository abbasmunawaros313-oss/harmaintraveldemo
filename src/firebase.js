// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbz0ZpeB9PSLer4zD7evdDlINTzfyj4SM",
  authDomain: "harmaintravelsdemo.firebaseapp.com",
  projectId: "harmaintravelsdemo",
  storageBucket: "harmaintravelsdemo.firebasestorage.app",
  messagingSenderId: "225088742368",
  appId: "1:225088742368:web:73b0bf167f766f1e12c185",
  measurementId: "G-BJ6SBW0VZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
