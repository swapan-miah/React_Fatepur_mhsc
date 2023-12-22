// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8tdioskx1CL-UIVCFiYxurhvmyKI2dUk",

  authDomain: "fmhs-9c255.firebaseapp.com",

  projectId: "fmhs-9c255",

  storageBucket: "fmhs-9c255.appspot.com",

  messagingSenderId: "626354211289",

  appId: "1:626354211289:web:f922dea06bf948c28b31c8",

  measurementId: "G-DMZSJEKVWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
