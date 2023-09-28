import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAVC8FkPtepahw046SbVAEdIqSa0x8SY-0",
  authDomain: "amphs-f9aae.firebaseapp.com",
  databaseURL:
    "https://amphs-f9aae-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "amphs-f9aae",
  storageBucket: "amphs-f9aae.appspot.com",
  messagingSenderId: "116747605866",
  appId: "1:116747605866:web:2576e5eeb46ce2b464f713",
  measurementId: "G-5MRXZSRPK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
