// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWGvWc7NaJZW0AtF80wLOiEgXYAQhO5Fc",
    authDomain: "info-lucascoelho.firebaseapp.com",
    projectId: "info-lucascoelho",
    storageBucket: "info-lucascoelho.appspot.com",
    messagingSenderId: "733568597959",
    appId: "1:733568597959:web:55fafc6ee394a1e417a3e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/*
  * Export Firebase
  * @returns {Object}
*/
export { app, auth, db };