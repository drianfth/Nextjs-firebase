// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGHDlvSKXMHvSBh5ynYCXr0t_4PnzI_yc",
  authDomain: "fir-tutorial-751f3.firebaseapp.com",
  projectId: "fir-tutorial-751f3",
  storageBucket: "fir-tutorial-751f3.appspot.com",
  messagingSenderId: "170564325638",
  appId: "1:170564325638:web:4155ae2e4f6fecfd670e87",
  measurementId: "G-5MYCHN8RFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);