// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK1dj1C7PJeGBscYW0oXpdEIk59AqiPD8",
  authDomain: "parcial-02-file-tree.firebaseapp.com",
  projectId: "parcial-02-file-tree",
  storageBucket: "parcial-02-file-tree.firebasestorage.app",
  messagingSenderId: "132665019681",
  appId: "1:132665019681:web:2556c04fcdf00b79bfc260",
  measurementId: "G-98SDDE6ZSD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

export default app