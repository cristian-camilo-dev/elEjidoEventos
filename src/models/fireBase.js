
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { getFirestore,collection, addDoc } from 'firebase/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';








const firebaseConfig = {
  apiKey: "AIzaSyDnV8B2sq745vllX65x1jtoCkSFzGDXxJo",
  authDomain: "eventos-ejido.firebaseapp.com",
  projectId: "eventos-ejido",
  storageBucket: "eventos-ejido.appspot.com",
  messagingSenderId: "505389434783",
  appId: "1:505389434783:web:a4fbb49b96e6cbe08f1faa",
  databaseURL: "https://eventos-ejido-default-rtdb.europe-west1.firebasedatabase.app",
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

//const auth = getAuth(firebaseApp);
const dataBase = ref(getDatabase(firebaseApp));
const auth = firebase.auth()
const db = getFirestore(firebaseApp);






export { auth, firebaseApp,dataBase,db };

/*
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnV8B2sq745vllX65x1jtoCkSFzGDXxJo",
  authDomain: "eventos-ejido.firebaseapp.com",
  projectId: "eventos-ejido",
  storageBucket: "eventos-ejido.appspot.com",
  messagingSenderId: "505389434783",
  appId: "1:505389434783:web:a4fbb49b96e6cbe08f1faa"

};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const dataBase = firebaseApp.database()
export { auth , firebaseApp, dataBase} */