import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUNtgD5EHIaaUeXU6Ggw0BNrw-8NlOcaY",
    authDomain: "reading-list-app-afcb0.firebaseapp.com",
    databaseURL: "https://reading-list-app-afcb0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reading-list-app-afcb0",
    storageBucket: "reading-list-app-afcb0.appspot.com",
    messagingSenderId: "315755398631",
    appId: "1:315755398631:web:600f368b26debf7eb0a942"
  };

initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export { db, auth }

