import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPaO7N0S8_DS0cx3cAzDPG0QXGVkXPNO8",
  authDomain: "cart-79781.firebaseapp.com",
  projectId: "cart-79781",
  storageBucket: "cart-79781.appspot.com",
  messagingSenderId: "757307953618",
  appId: "1:757307953618:web:386b456cfe6408ae69f80b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
