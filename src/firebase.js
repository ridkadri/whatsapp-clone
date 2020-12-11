import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCiW16wHVvn8qJTDU3n6csaUgQGMogXmBg",
  authDomain: "whatsapp-clone-5b206.firebaseapp.com",
  projectId: "whatsapp-clone-5b206",
  storageBucket: "whatsapp-clone-5b206.appspot.com",
  messagingSenderId: "61174835472",
  appId: "1:61174835472:web:805f93a56cfac4d7a45d95"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;