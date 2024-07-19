import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrx0FrJgASVebfnHIaDrg3Imhtr6T5s5U",
  authDomain: "netflip-gpt.firebaseapp.com",
  projectId: "netflip-gpt",
  storageBucket: "netflip-gpt.appspot.com",
  messagingSenderId: "530749862196",
  appId: "1:530749862196:web:468643627dd16468a97561",
  measurementId: "G-KBH7NYM79Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();