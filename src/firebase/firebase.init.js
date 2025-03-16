// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc751pSCorfFdFtJUs2GAQdAQCtgFy5Hs",
  authDomain: "crowed-funding-d1981.firebaseapp.com",
  projectId: "crowed-funding-d1981",
  storageBucket: "crowed-funding-d1981.firebasestorage.app",
  messagingSenderId: "836177067043",
  appId: "1:836177067043:web:8c9c374ff733c2e4324596"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);