import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI3WaTvzWcFW7WGagxXML-RVhixAXRLdc",
  authDomain: "food-corner-80729.firebaseapp.com",
  databaseURL: "https://food-corner-80729-default-rtdb.firebaseio.com",
  projectId: "food-corner-80729",
  storageBucket: "food-corner-80729.appspot.com",
  messagingSenderId: "940806400843",
  appId: "1:940806400843:web:c9c0e3304bf230f83a96ce",
  measurementId: "G-3R8MRHRZJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
