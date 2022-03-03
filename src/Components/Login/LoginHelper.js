import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { initializeApp } from 'firebase/app';

export const firebaseInitialize = () => {
    initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {  
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};
