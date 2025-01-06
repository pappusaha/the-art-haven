// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFus2Zu3mJG3PYnWI7GD2jh-Dfn_aU-fk",
  authDomain: "art-haven.firebaseapp.com",
  projectId: "art-haven",
  storageBucket: "art-haven.firebasestorage.app",
  messagingSenderId: "587655753641",
  appId: "1:587655753641:web:a623eaeef6a7653acc9eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export default auth