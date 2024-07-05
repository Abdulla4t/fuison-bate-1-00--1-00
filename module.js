  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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
 export const db = getDatabase(app);
  
  console.log(db);