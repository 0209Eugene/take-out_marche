import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDluX_qaZ6xXt-hUtP0i3bgsWYZnjuvryY",
    authDomain: "take-out-marche-db.firebaseapp.com",
    databaseURL: "https://take-out-marche-db.firebaseio.com",
    projectId: "take-out-marche-db",
    storageBucket: "take-out-marche-db.appspot.com",
    messagingSenderId: "743603096843",
    appId: "1:743603096843:web:2c5bd7f9c8d8ead3b5260e",
    measurementId: "G-S8V15N7TPB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider)
    .then(function (result) {
      // The firebase.User instance:
      var user = result.user;
      // The Facebook firebase.auth.AuthCredential containing the Facebook
      // access token:
      var credential = result.credential;
    }, function (error) {
      // The provider's account email, can be used in case of
      // auth/account-exists-with-different-credential to fetch the providers
      // linked to the email:
      var email = error.email;
      // The provider's credential:
      var credential = error.credential;
      // In case of auth/account-exists-with-different-credential error,
      // you can fetch the providers using this:
      if (error.code === 'auth/account-exists-with-different-credential') {
        auth.fetchSignInMethodsForEmail(email).then(function (providers) {
          // The returned 'providers' is a list of the available providers
          // linked to the email address. Please refer to the guide for a more
          // complete explanation on how to recover from this error.
        });
      };
    }
    );

export default firebase;
