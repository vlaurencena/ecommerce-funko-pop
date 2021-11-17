// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

// Add SDKs for Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv_g5U1yC9iWTDD1YieUjQW2IdpVFsVJw",
    authDomain: "funko-town.firebaseapp.com",
    projectId: "funko-town",
    storageBucket: "funko-town.appspot.com",
    messagingSenderId: "975260509707",
    appId: "1:975260509707:web:305215abff986746ad490e"
};

// Log and Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get database
const firestore = firebase.firestore(app);

// Export database
export default firestore;