import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBfBMXsBfR1vNcVz9ln4Q8BMWVGp_fFhdg",
    authDomain: "lokah-155e3.firebaseapp.com",
    projectId: "lokah-155e3",
    storageBucket: "lokah-155e3.appspot.com",
    messagingSenderId: "87501764426",
    appId: "1:87501764426:web:ed8fd1ecdef4e5cfdcb3b3",
    measurementId: "G-SYBH6KMB1R"
})

var db = firebaseApp.firestore();

export { db }