// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAsshddjeDUwP_5Aa9U9a-L54ok_bTuM-c",
    authDomain: "clone-fa401.firebaseapp.com",
    projectId: "clone-fa401",
    storageBucket: "clone-fa401.appspot.com",
    messagingSenderId: "1047799706289",
    appId: "1:1047799706289:web:75a26402a21beff401a890",
    measurementId: "G-V047F18X0G"
  };
const firebaseApp=initializeApp(firebaseConfig);
const db=getFirestore(firebaseApp);
const auth=getAuth(firebaseApp);
export {db,auth};
