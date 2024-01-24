import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyAdK3NAkzwM4R3qH2aJ79cmV2Gl9wMELAg",
    authDomain: "outoftheboys-bb742.firebaseapp.com",
    projectId: "outoftheboys-bb742",
    storageBucket: "outoftheboys-bb742.appspot.com",
    messagingSenderId: "476578575451",
    appId: "1:476578575451:web:a80297e63ba42f39c17b7e",
    measurementId: "G-E28X6S0X9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);