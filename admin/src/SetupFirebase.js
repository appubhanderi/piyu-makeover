import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';  // <----
let firebaseApp;
SetupFirebase();

/**
* Firebase Initialization Function
* This must be called before any firebase query
*/
function SetupFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyC-kscwOlMj79VLnH8jcgJ7W9g8yI-UOIw",
        authDomain: "piyu-makeover.firebaseapp.com",
        projectId: "piyu-makeover",
        storageBucket: "piyu-makeover.appspot.com",
        messagingSenderId: "1016275440424",
        appId: "1:1016275440424:web:bead82adf2c4435165f61d",
        measurementId: "G-MTDY1JHN1F"
    };
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;