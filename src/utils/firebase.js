import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCW0n9dF_0dd3qECrdJKsSjjiGjelpGPWI",
  authDomain: "playlix-79d5c.firebaseapp.com",
  projectId: "playlix-79d5c",
  storageBucket: "playlix-79d5c.appspot.com",
  messagingSenderId: "884958857270",
  appId: "1:884958857270:web:9b6ede74262b9c742cf097",
  measurementId: "G-JCEXL5XTR2"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDrx0FrJgASVebfnHIaDrg3Imhtr6T5s5U",
//   authDomain: "netflip-gpt.firebaseapp.com",
//   projectId: "netflip-gpt",
//   storageBucket: "netflip-gpt.appspot.com",
//   messagingSenderId: "530749862196",
//   appId: "1:530749862196:web:468643627dd16468a97561",
//   measurementId: "G-KBH7NYM79Q"
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app)


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";



// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);