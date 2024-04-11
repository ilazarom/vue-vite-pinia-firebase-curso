import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBzFOjR4pkSsgR5SpJ6enNbgcQqTuFGj4w",
  authDomain: "vue-3-2024-84861.firebaseapp.com",
  projectId: "vue-3-2024-84861",
  storageBucket: "vue-3-2024-84861.appspot.com",
  messagingSenderId: "621982719764",
  appId: "1:621982719764:web:52f1a8d421755bc1b1ac01"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db};