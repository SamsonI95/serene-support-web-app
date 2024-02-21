import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDHxcpbVQOH-gsK3OysdPJKp1GLQmmCtbg",
  authDomain: "serene-support.firebaseapp.com",
  projectId: "serene-support",
  storageBucket: "serene-support.appspot.com",
  messagingSenderId: "832778518885",
  appId: "1:832778518885:web:083c3bbccfab205eb9a18c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore()