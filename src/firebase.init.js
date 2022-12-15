// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaxUgN0Mk8MGi12cASIJVKmbN13zlguYY",
    authDomain: "fir-simple-authenticatio-dbefd.firebaseapp.com",
    projectId: "fir-simple-authenticatio-dbefd",
    storageBucket: "fir-simple-authenticatio-dbefd.appspot.com",
    messagingSenderId: "1090139552008",
    appId: "1:1090139552008:web:21cb91d5d17da1f5bf54bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;