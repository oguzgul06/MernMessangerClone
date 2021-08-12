import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCs4Kb3Vja5PI9cyfwH7ggCf3bzgbG3U9w",
  authDomain: "mern-messenger-clone-29200.firebaseapp.com",
  projectId: "mern-messenger-clone-29200",
  storageBucket: "mern-messenger-clone-29200.appspot.com",
  messagingSenderId: "121925384759",
  appId: "1:121925384759:web:98f39bb2d0b256017fddb2",
});

const db = firebaseApp.firestore();

export default db;
