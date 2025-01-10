import {signInWithEmailAndPassword,onAuthStateChanged, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, signOut,FacebookAuthProvider  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../FIrebase/Firebase.config';
export const AuthContext=createContext(null)

const facebookProvider = new FacebookAuthProvider();
const  goggleProvider = new GoogleAuthProvider();

const AuthProvider =({children}) => {
const [user, setUser]=useState(null)

const signIn=(email, password) => {
   return  signInWithEmailAndPassword(auth, email, password)

}
    

const signUpUser=(email,password) => {
  return   createUserWithEmailAndPassword(auth, email, password)


}
const logout =()=> {
   
    signOut(auth)
console.log('pappus')
    setUser('')
   
   
}
// Observer 

useEffect(()=> {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        console.log(user)
        if (user) {
            setUser(user)
           
          }
      });
return ()=>unsubscribe()


},[user])

// update a profile 

// const profileUpdate=() => {
//     return updateProfile(auth.currentUser);
// }

// logOut 




// this is social media section 
const goggleLogin =() => {
    return signInWithPopup(auth, goggleProvider)

}
const facebookLogIn=() => {
     return signInWithPopup(auth, facebookProvider)

}
const allValues={
    
    signUpUser,
    goggleLogin,
    user,
    setUser,
  
    signIn,
    logout,
    facebookLogIn
}

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;