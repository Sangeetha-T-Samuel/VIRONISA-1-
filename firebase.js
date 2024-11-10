
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OguzJC5Zr5iuN_Ii0MckURFTuobahTo",
  authDomain: "vironisa-4beb8.firebaseapp.com",
  databaseURL: "https://vironisa-4beb8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vironisa-4beb8",
  storageBucket: "vironisa-4beb8.firebasestorage.app",
  messagingSenderId: "352994860732",
  appId: "1:352994860732:web:8cc324198308f2e8d93ab9",
  measurementId: "G-VHTKSQQSVG"
};

//AIzaSyC6OguzJC5Zr5iuN_Ii0MckURFTuobahTo

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const analytics = getAnalytics(app);
export { auth };