// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyw6o3G4LuTVp9Hpr96Ku6EWE5Q1feEOE",
  authDomain: "inventory-management-dd3e8.firebaseapp.com",
  projectId: "inventory-management-dd3e8",
  storageBucket: "inventory-management-dd3e8.appspot.com",
  messagingSenderId: "554738967409",
  appId: "1:554738967409:web:2bc5382b80c7cd66220cd0",
  measurementId: "G-QDTS965YDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}