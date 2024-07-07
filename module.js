// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyuBGv-_k1Ewy_dgE_SKmZ4ySAHJjnKoE",
  authDomain: "fusion-a107a.firebaseapp.com",
  projectId: "fusion-a107a",
  storageBucket: "fusion-a107a.appspot.com",
  messagingSenderId: "152309033769",
  appId: "1:152309033769:web:61fb67508c4de1ed136538",
  measurementId: "G-LK3ZNQ7784"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

