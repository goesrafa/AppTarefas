import firebase from 'firebase'
import 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBnaqpS0gZNeWO155XuKXQmG5n9FbQW-Ws",
    authDomain: "apptarefas-98b23.firebaseapp.com",
    projectId: "apptarefas-98b23",
    storageBucket: "apptarefas-98b23.appspot.com",
    messagingSenderId: "217957851650",
    appId: "1:217957851650:web:20effe411f0d704fe67d1b"
  };
  
  // Initialize Firebase
  const database = initializeApp(firebaseConfig);
  export default database
  