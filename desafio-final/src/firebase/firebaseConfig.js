import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBGKlOYH_-GDtzcWbfeJ7mSMOaxFvvOxpQ",
  authDomain: "react-ecommerce-d5304.firebaseapp.com",
  projectId: "react-ecommerce-d5304",
  storageBucket: "react-ecommerce-d5304.firebasestorage.app",
  messagingSenderId: "1076505271102",
  appId: "1:1076505271102:web:80a316985aad6a22b9ea6f"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)