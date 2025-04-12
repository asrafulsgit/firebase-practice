import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC_o60WxTjdo1PT4rlxHa3oTxvOLUIXAnI",
  authDomain: "pracitce-c2f8c.firebaseapp.com",
  databaseURL: "https://pracitce-c2f8c-default-rtdb.firebaseio.com",
  projectId: "pracitce-c2f8c",
  storageBucket: "pracitce-c2f8c.firebasestorage.app",
  messagingSenderId: "1072809065369",
  appId: "1:1072809065369:web:4ef9b59ab78e14c8637108",
  measurementId: "G-E39SKS0DND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
