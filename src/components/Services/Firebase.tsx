// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getStorage, ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvXxby6zp-wlCKqDZEx90Rb4WIv5j1X0",
  authDomain: "dbms-unit10.firebaseapp.com",
  projectId: "dbms-unit10",
  storageBucket: "dbms-unit10.appspot.com",
  messagingSenderId: "960724258213",
  appId: "1:960724258213:web:7d2b7a7c21dee7d78bac4c",
  measurementId: "G-GMT77PPYYK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const storageRef = ref(storage, "open-book.png");
