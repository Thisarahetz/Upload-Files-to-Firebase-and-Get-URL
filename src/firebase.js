// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4N__tkMAj0e0J2PMulvWfaDFGzMO_Do",
    authDomain: "asdadadsadsada.firebaseapp.com",
    projectId: "asdadadsadsada",
    storageBucket: "asdadadsadsada.appspot.com",
    messagingSenderId: "461239407741",
    appId: "1:461239407741:web:df799576aa99621794d14",
    measurementId: "G-28RTP130BH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)