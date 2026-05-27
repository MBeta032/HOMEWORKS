import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcRb9507-7PRmkXp8jTh7Z_vCDQaJCMZc",
  authDomain: "parcial-03.firebaseapp.com",
  projectId: "parcial-03",
  storageBucket: "parcial-03.firebasestorage.app",
  messagingSenderId: "370973570914",
  appId: "1:370973570914:web:a3fe03c53c5c25916dde3b",
  measurementId: "G-KH87JFG6Q1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);