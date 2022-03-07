import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
      const {displayName, email, photoURL} = result.user;
      const signedInUser ={
        issLoggedIn : true,
        name: displayName,
        email: email,
        photo : photoURL
      }
      
      return signedInUser;
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};

export const handleEmailCreateUser = (name, email, password) => {
  const auth = getAuth();
return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage, error);
    return errorMessage
  });
  // displayUserName(name);
}

export const handleSignInUser = (email, password) => {
  const auth = getAuth();
return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });

const displayUserName = (name) => {
  const auth = getAuth();
 updateProfile(auth.currentUser, {
  displayName: name 
}).then(() => {
 
}).catch((error) => {
 
});

}
}