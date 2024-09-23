// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- Import Firebase Auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlp2XmdrYFpzGAn579_lYs5KwPBR1uA4s",
  authDomain: "code-pen-c443a.firebaseapp.com",
  projectId: "code-pen-c443a",
  storageBucket: "code-pen-c443a.appspot.com",
  messagingSenderId: "122012802037",
  appId: "1:122012802037:web:009fa1efdb79fda4399ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app); // <-- Initialize Firebase Auth
