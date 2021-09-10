
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB5cXasDWPfWpjjXYXT6KTBHl8nDn9SsJc",
    authDomain: "netflix-eb1ff.firebaseapp.com",
    projectId: "netflix-eb1ff",
    storageBucket: "netflix-eb1ff.appspot.com",
    messagingSenderId: "148633209545",
    appId: "1:148633209545:web:6d1d4fa250e13c645bdb18",
    measurementId: "G-NW3B8WSETN"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore()
  const auth = firebase.auth();


  export {auth};
  export default db;