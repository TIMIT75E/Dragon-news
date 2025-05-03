// DENGER DO NOT SHOW IT PUBLICALY OR DON'T PUSH IT ON Github


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBIoG1zT6nCR2q7u2acR3o36gO8u9jrM",
  authDomain: "dragon-news-7f894.firebaseapp.com",
  projectId: "dragon-news-7f894",
  storageBucket: "dragon-news-7f894.firebasestorage.app",
  messagingSenderId: "871208844755",
  appId: "1:871208844755:web:db3ea27d8b42229993c326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);