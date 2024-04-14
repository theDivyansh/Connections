// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzlqcDxRwYHVOIXhdJYGpSza8zJVdV0DM",
  authDomain: "contact-ef3a2.firebaseapp.com",
  projectId: "contact-ef3a2",
  storageBucket: "contact-ef3a2.appspot.com",
  messagingSenderId: "297080035984",
  appId: "1:297080035984:web:82771c2a46f025b7aa9615",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
