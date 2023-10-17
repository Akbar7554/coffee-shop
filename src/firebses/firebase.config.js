// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdHLgIPabbapNvkicaW5hXJIj_V6QruRY",
    authDomain: "coffee-shop-e4ece.firebaseapp.com",
    projectId: "coffee-shop-e4ece",
    storageBucket: "coffee-shop-e4ece.appspot.com",
    messagingSenderId: "962287694935",
    appId: "1:962287694935:web:487a84b960accd61d5df12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;