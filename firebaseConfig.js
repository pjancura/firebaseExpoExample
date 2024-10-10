import { initializeApp } from 'firebase/app'
import { getDatabase } from "firebase/database";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM1aMMTQusI3IYNy_z8pk_AQm6wuA4mQw",
    authDomain: "nativeplantsgreatlakes-58e5b.firebaseapp.com",
    projectId: "nativeplantsgreatlakes-58e5b",
    storageBucket: "nativeplantsgreatlakes-58e5b.appspot.com",
    messagingSenderId: "753122611782",
    appId: "1:753122611782:web:da78a05e0cb940f591f047"
  };
  
  const app = initializeApp(firebaseConfig);
  // For more information on how to access Firebase in your project,
  // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

  // Initialize realtime database and get a ference to the service
  export const db = getDatabase(app)