
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAjPGdAUljdoB4ecnt1rQ0ZlrcoN289kno",
  authDomain: "react-netflix-clone-c58dc.firebaseapp.com",
  projectId: "react-netflix-clone-c58dc",
  storageBucket: "react-netflix-clone-c58dc.appspot.com",
  messagingSenderId: "1018658201115",
  appId: "1:1018658201115:web:573e1c3a7d1fbde981a2be",
  measurementId: "G-BHZVBVQ9LQ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);