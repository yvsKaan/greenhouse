// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR9gbJHmUUHwE9zH1a-dEPEbG4v9aWSjQ",
  authDomain: "seraotomasyonsistemi-465ec.firebaseapp.com",
  databaseURL: "https://seraotomasyonsistemi-465ec-default-rtdb.firebaseio.com",
  projectId: "seraotomasyonsistemi-465ec",
  storageBucket: "seraotomasyonsistemi-465ec.appspot.com",
  messagingSenderId: "606507712345",
  appId: "1:606507712345:web:fa2e0d31f98b9eefb81648",
  measurementId: "G-J96919Z6NQ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0 ){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const db = app.database();
const auth = firebase.auth();

export { db };