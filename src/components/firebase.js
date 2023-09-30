

  import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCEGT6CwpwAzjBonIIRYV6CBuyIfglpOcg",
  authDomain: "mailbox-client-fa8fa.firebaseapp.com",
  databaseURL: "https://mailbox-client-fa8fa-default-rtdb.firebaseio.com",
  projectId: "mailbox-client-fa8fa",
  storageBucket: "mailbox-client-fa8fa.appspot.com",
  messagingSenderId: "907907788855",
  appId: "1:907907788855:web:3db1f8e0228b91512e0fb2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
