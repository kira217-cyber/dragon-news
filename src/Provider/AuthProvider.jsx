import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

export const auth = getAuth(app)

const AuthProvider = ({children}) => {

    

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
// console.log(user,loading)

    const logIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }
    
    const updateUser = (updateData)=>{
       return updateProfile(auth.currentUser, updateData)
    }

    const forgetPassword = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    const googleLogin = (auth,provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const githubLogin = (auth,provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        }
    },[])

    const authData= {
        logOut,
        createUser,
        updateUser,
        user,
        setUser,
        logIn,
        loading,
        setLoading,
        forgetPassword,
        googleLogin,
        githubLogin
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;