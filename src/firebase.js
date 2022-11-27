import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqg_G32ifK1kDgl_QlI4ghLor2rtJH8-8",
    authDomain: "fir-todo-947f4.firebaseapp.com",
    projectId: "fir-todo-947f4",
    storageBucket: "fir-todo-947f4.appspot.com",
    messagingSenderId: "756725001446",
    appId: "1:756725001446:web:5849fcf10c831fab5b1f27",
    measurementId: "G-XB8DDV6CC0"
  };

  const app= initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};