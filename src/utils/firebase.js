import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "playlix-79d5c.firebaseapp.com",
  projectId: "playlix-79d5c",
  storageBucket: "playlix-79d5c.appspot.com",
  messagingSenderId: "884958857270",
  appId: "1:884958857270:web:9b6ede74262b9c742cf097",
  measurementId: "G-JCEXL5XTR2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app)



