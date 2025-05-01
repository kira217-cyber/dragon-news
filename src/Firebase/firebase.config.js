// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqCXM4f-BXXJtZrxq44Vx5vposdkImhg0",
  authDomain: "dragon-news-dc37d.firebaseapp.com",
  projectId: "dragon-news-dc37d",
  storageBucket: "dragon-news-dc37d.firebasestorage.app",
  messagingSenderId: "741942734077",
  appId: "1:741942734077:web:7bf4fb0d80c98bddb3a294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app