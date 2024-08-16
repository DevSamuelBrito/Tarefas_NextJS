// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT_y0lEL5bD0w9enXruKOVv9IrbArFURs",
  authDomain: "tasklist-9f78e.firebaseapp.com",
  projectId: "tasklist-9f78e",
  storageBucket: "tasklist-9f78e.appspot.com",
  messagingSenderId: "280767043565",
  appId: "1:280767043565:web:37f1b64331b882f4f479e4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
