import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZcBVZedDN5JqOrMXjhRF6HALRdzlSFec",
    authDomain: "e-commerce-elias.firebaseapp.com",
    projectId: "e-commerce-elias",
    storageBucket: "e-commerce-elias.appspot.com",  // Corregido aquí
    messagingSenderId: "686341179141",
    appId: "1:686341179141:web:3ee40f718375ede310196c",
    measurementId: "G-EMP3RT9CZH"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
