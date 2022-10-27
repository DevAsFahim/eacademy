import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // create new user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // add user profile picture and name
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // load user information
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe()
        }
    }, [])

    // user login
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // login with google 
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // login with github
    const createUserWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // log out user
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { 
        user,
        createUser, 
        createUserWithGoogle, 
        logOut, 
        userLogIn, 
        createUserWithGithub, 
        updateUserProfile 
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;