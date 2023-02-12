// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfuxwRHfIp-jnPnPS3jEyR-HkhFpnUW8s",
    authDomain: "matterzone-b0305.firebaseapp.com",
    projectId: "matterzone-b0305",
    storageBucket: "matterzone-b0305.appspot.com",
    messagingSenderId: "651654106869",
    appId: "1:651654106869:web:c9bac9a281acca87f43fbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);