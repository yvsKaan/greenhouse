// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnntMNszV4bP2wfUqKejG5faOfTgMCYjI",
  authDomain: "sera-otomasyon-sistemi.firebaseapp.com",
  databaseURL: "https://sera-otomasyon-sistemi-default-rtdb.firebaseio.com",
  projectId: "sera-otomasyon-sistemi",
  storageBucket: "sera-otomasyon-sistemi.appspot.com",
  messagingSenderId: "914927201538",
  appId: "1:914927201538:web:c64f5fbaddfe532acf661b",
  measurementId: "G-YS4BZMRB42"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };