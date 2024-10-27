// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b0df3.firebaseapp.com",
  projectId: "mern-auth-b0df3",
  storageBucket: "mern-auth-b0df3.appspot.com",
  messagingSenderId: "879532570472",
  appId: "1:879532570472:web:0cc8f8186006b0178548dd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
