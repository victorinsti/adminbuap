// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBXyXUKVGtYiIPrOAYLd7dix0zN1BdpVAs",
    authDomain: "adminbuap.firebaseapp.com",
    projectId: "adminbuap",
    storageBucket: "adminbuap.firebasestorage.app",
    messagingSenderId: "797550543109",
    appId: "1:797550543109:web:544e2695bac8819374376c",
    measurementId: "G-X5PC02YQX4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);