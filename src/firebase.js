import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZfM6GaMQ6yuKRi7Gom5aK9-U9o9lr4Do",
  authDomain: "linkedin-clone-yt-59f17.firebaseapp.com",
  projectId: "linkedin-clone-yt-59f17",
  storageBucket: "linkedin-clone-yt-59f17.appspot.com",
  messagingSenderId: "775145996879",
  appId: "1:775145996879:web:5dbb34a6eb7e0c526ee03a",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
