// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMtDBiBrGgdzBYNR_-a0lN_vtBErEUpDg",
  authDomain: "kashif-ali-project.firebaseapp.com",
  projectId: "kashif-ali-project",
  storageBucket: "kashif-ali-project.firebasestorage.app",
  messagingSenderId: "71860605405",
  appId: "1:71860605405:web:6cdcf435183b17c60fa634",
  measurementId: "G-RB2RHREGJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
