import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

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
        setLoading
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;