// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a2ce7.firebaseapp.com",
  projectId: "mern-blog-a2ce7",
  storageBucket: "mern-blog-a2ce7.appspot.com",
  messagingSenderId: "307248593372",
  appId: "1:307248593372:web:ef608aaabe5c9a8229b719"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);