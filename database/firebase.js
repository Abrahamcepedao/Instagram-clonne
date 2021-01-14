import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/firebase-storage'

var firebaseConfig = {
    apiKey: "AIzaSyBuPyfClts_PTeQ3qBFvMaTP-DYMUoajz0",
    authDomain: "instagram-app-c588a.firebaseapp.com",
    projectId: "instagram-app-c588a",
    storageBucket: "instagram-app-c588a.appspot.com",
    messagingSenderId: "112620215617",
    appId: "1:112620215617:web:b0573b94b9efda1027d5c0"
}

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();
export default { firebase, db, storage };