import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/firebase.config';
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (systemPrefersDark ? 'dark' : 'light');
  });
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
   const googleSignIn=()=>{
        return signInWithPopup(auth,provider)
    }
  useEffect(() => {
    const userState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoader(false)
    });
    return () => {
      userState();
    }
  }, [])
  const updateUser = (newData) => {
    return updateProfile(auth.currentUser, newData)
  }
  const logOut = () => {
    return signOut(auth)
  }
  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  const signIn = (email, password) => {
    setLoader(true)
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
console.log(user)
  const AllCom = {
    theme,
    toggleTheme,
    createUser,
    user,
    setUser,
    updateUser,
    logOut,
    forgetPass,
    signIn,
    googleSignIn
  }
  return <AuthContext value={AllCom}>{children}</AuthContext>;
};

export default AuthProvider;