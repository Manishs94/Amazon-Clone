import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6h9qFH7WeTAEuMVcaGiEK-VQJfmOOMl4",
  authDomain: "clone-6cfc7.firebaseapp.com",
  databaseURL: "https://clone-6cfc7-default-rtdb.firebaseio.com",
  projectId: "clone-6cfc7",
  storageBucket: "clone-6cfc7.appspot.com",
  messagingSenderId: "569729186582",
  appId: "1:569729186582:web:faad793748133373feae37",
  measurementId: "G-C8KMN459ZN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };