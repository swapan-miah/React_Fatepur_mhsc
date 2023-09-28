// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);

export default storage;
