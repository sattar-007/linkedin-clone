import firebase from "firebase"; 
 
 const firebaseConfig = {
    apiKey: "AIzaSyDKh2Q3jpebgQqMpWgpC1h7Z6zZr8e51yU",
    authDomain: "linkedin-clone-b1d8b.firebaseapp.com",
    projectId: "linkedin-clone-b1d8b",
    storageBucket: "linkedin-clone-b1d8b.appspot.com",
    messagingSenderId: "327572388087",
    appId: "1:327572388087:web:022df36a1733c47fe1bbf2"
  };

  const  firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };
