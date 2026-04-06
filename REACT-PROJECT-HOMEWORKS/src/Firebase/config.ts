import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDIn6ZnnHtt1fPkHDJzon9opd__Q16BB5o",
  authDomain: "challenge-07-ad5d6.firebaseapp.com",
  databaseURL: "https://challenge-07-ad5d6-default-rtdb.firebaseio.com",
  projectId: "challenge-07-ad5d6",
  storageBucket: "challenge-07-ad5d6.firebasestorage.app",
  messagingSenderId: "212997303660",
  appId: "1:212997303660:web:b0ffbdef22a89f04cdd749",
  measurementId: "G-QJLCR2R1V8"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }