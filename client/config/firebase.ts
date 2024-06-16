import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

//development
const firebaseConfig = {
  apiKey: "AIzaSyBpJYmjP7tmCoIO_bD4yMAzXS9F9QpMpP4",
  authDomain: "cv-bluider.firebaseapp.com",
  projectId: "cv-bluider",
  storageBucket: "cv-bluider.appspot.com",
  messagingSenderId: "697626773736",
  appId: "1:697626773736:web:1f0008f34f9d369810e15d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const realtimeDB = getDatabase(app);
