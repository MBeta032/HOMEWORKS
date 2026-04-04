// Import the functions you need from the SDKs you need
import { getAtuh } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIn6ZnnHtt1fPkHDJzon9opd__Q16BB5o",
  authDomain: "challenge-07-ad5d6.firebaseapp.com",
  projectId: "challenge-07-ad5d6",
  storageBucket: "challenge-07-ad5d6.firebasestorage.app",
  messagingSenderId: "212997303660",
  appId: "1:212997303660:web:b0ffbdef22a89f04cdd749",
  measurementId: "G-QJLCR2R1V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);