import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase (make sure you've configured Firebase properly)
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

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const storageRef = storage.ref("result"); // Reference to the root of your storage

// Fetch a list of items from Firebase Storage
async function fetchPDFFiles() {
  try {
    const files = await storageRef.listAll();
    return files.items.map(async (fileRef) => {
      const url = await fileRef.getDownloadURL();
      const name = fileRef.name;
      console.log(name);
      console.log(url);
      return { name, url };
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    return [];
  }
}
