// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBW-2OahKexpkXJySY_OU2foTPmUEuqGfU",
    authDomain: "whatsapp-clone-in2021.firebaseapp.com",
    projectId: "whatsapp-clone-in2021",
    storageBucket: "whatsapp-clone-in2021.appspot.com",
    messagingSenderId: "164441970420",
    appId: "1:164441970420:web:e6dc3f21a648251f30b0a1",
    measurementId: "G-MRXWE2V5F9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider};
  export default db;