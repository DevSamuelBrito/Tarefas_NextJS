// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI0zm5ZzI95j3qWl9F0dI-o9dZb027sMM",
  authDomain: "tarefasplus-6af95.firebaseapp.com",
  projectId: "tarefasplus-6af95",
  storageBucket: "tarefasplus-6af95.appspot.com",
  messagingSenderId: "944315101990",
  appId: "1:944315101990:web:01dbf17a4f522309b2c7e7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
