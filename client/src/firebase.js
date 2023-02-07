import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhXb8GIrnLQ0bO8IJhwsQZm9wClRO0SWE",
  authDomain: "chat-5a154.firebaseapp.com",
  projectId: "chat-5a154",
  storageBucket: "chat-5a154.appspot.com",
  messagingSenderId: "698386120921",
  appId: "1:698386120921:web:b490e5eda76c29d1347ec8",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
