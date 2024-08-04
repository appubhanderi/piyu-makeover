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
        apiKey: "AIzaSyBcpKH0pbNeK71S9vNx1IlYH2dF5Xi01PA",
        authDomain: "piyumakeover-admin-9ae72.firebaseapp.com",
        projectId: "piyumakeover-admin-9ae72",
        storageBucket: "piyumakeover-admin-9ae72.appspot.com",
        messagingSenderId: "790271963436",
        appId: "1:790271963436:web:5f1258990641d402c73c89",
        measurementId: "G-Z2CEE2Y692"
    };
    // Initialize Firebase
    firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default firebaseApp;