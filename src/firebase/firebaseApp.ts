import firebase from "firebase/compat/app"

const firebaseConfig = {
  apiKey: "AIzaSyA3V_V14-6NXNW2mfnnDrPiEL78zYbKj-8",
  authDomain: "fir-playground-minty-c42ef.firebaseapp.com",
  projectId: "fir-playground-minty-c42ef",
  storageBucket: "fir-playground-minty-c42ef.appspot.com",
  messagingSenderId: "413343671148",
  appId: "1:413343671148:web:1dcee854ebc38ec247c949",
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
