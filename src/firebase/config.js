// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAqyIUL5-ekeB2XhsK0nIetLBQ4h49v-Wo",
    authDomain: "proyectocoder-7af8d.firebaseapp.com",
    projectId: "proyectocoder-7af8d",
    storageBucket: "proyectocoder-7af8d.appspot.com",
    messagingSenderId: "83879503105",
    appId: "1:83879503105:web:cdc4a34cdbae33d28d6700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
