import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBXAHexLtk_jgGKobBocyc0IArV3ZFF3Rc",
  authDomain: "crwn-db-bfea1.firebaseapp.com",
  projectId: "crwn-db-bfea1",
  storageBucket: "crwn-db-bfea1.appspot.com",
  messagingSenderId: "1083807144678",
  appId: "1:1083807144678:web:eb39ddd57e9314fd37b927",
  measurementId: "G-QZM3Y9NF7S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
