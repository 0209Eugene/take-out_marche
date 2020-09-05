import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// import { error } from 'console';


const firebaseConfig = {
    apiKey: "AIzaSyDluX_qaZ6xXt-hUtP0i3bgsWYZnjuvryY",
    authDomain: "take-out-marche-db.firebaseapp.com",
    databaseURL: "https://take-out-marche-db.firebaseio.com",
    projectId: "take-out-marche-db",
    storageBucket: "take-out-marche-db.appspot.com",
    messagingSenderId: "743603096843",
    appId: "1:743603096843:web:2c5bd7f9c8d8ead3b5260e",
    measurementId: "G-S8V15N7TPB"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch(err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;
