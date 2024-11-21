// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv_g5U1yC9iWTDD1YieUjQW2IdpVFsVJw",
    authDomain: "funko-town.firebaseapp.com",
    projectId: "funko-town",
    storageBucket: "funko-town.appspot.com",
    messagingSenderId: "975260509707",
    appId: "1:975260509707:web:305215abff986746ad490e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Correctly export Firestore
//firestore.firestore().settings({ experimentalForceLongPolling: true })

export { firestore };
