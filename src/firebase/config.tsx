import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB11_IfEh42fTxZdeG9gjh3HAfJkCTrHUQ", // Ideal this should be in dotenv file
  authDomain: "react-growthops.firebaseapp.com",
  databaseURL:
    "https://react-growthops-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-growthops",
  storageBucket: "react-growthops.appspot.com",
  messagingSenderId: "1039538457597",
  appId: "1:1039538457597:web:4a6a1fbaca766fb608a794",
  measurementId: "G-4NBH46ZKNJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
