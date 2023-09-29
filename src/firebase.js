import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCN7K1ITq3rInTNYlt9nDgV6DpSXjC5S-c",
    authDomain: "twitter-clone-1d9cb.firebaseapp.com",
    projectId: "twitter-clone-1d9cb",
    storageBucket: "twitter-clone-1d9cb.appspot.com",
    messagingSenderId: "580580798349",
    appId: "1:580580798349:web:70093fb857ce0cc50297c4",
    measurementId: "G-36N75PFHWB"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;