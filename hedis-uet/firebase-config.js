// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZXeMJ9tawQbCz03aJwsd94jDqa3Uyysw",
  authDomain: "hedis-uet.firebaseapp.com",
  projectId: "hedis-uet",
  storageBucket: "hedis-uet.appspot.com",
  messagingSenderId: "344047895792",
  appId: "1:344047895792:web:c6ffa2913facc1a8612e35"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)