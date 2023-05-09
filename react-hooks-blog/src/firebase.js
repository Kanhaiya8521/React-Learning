import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0iPNGzldispAjimxf6LDgnlh-DidAKKQ",
  authDomain: "react-hooks-blog-3c435.firebaseapp.com",
  projectId: "react-hooks-blog-3c435",
  storageBucket: "react-hooks-blog-3c435.appspot.com",
  messagingSenderId: "101705956088",
  appId: "1:101705956088:web:9915ef4240947972b5d90d"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
 const app = initializeApp(firebaseConfig) ;
 export const db = getFirestore(app);

// export const firestore = firebase.firestore();