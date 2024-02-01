import React, { useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, FormControlLabel, Checkbox, Grid, Link, Typography, Container } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    getDoc,
  } from "firebase/firestore";
  import { db } from "../config/firebase";
 

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signOutHandler = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        setUser({ uid: userCredential.uid, email: userCredential.email });
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);


  const deleteResume = async (resumeObj) => {
    // delete from firebase
    try {
      const resumeObjRef = doc(db, "resumeCollection", resumeObj.id);
      await deleteDoc(resumeObjRef);
      // delete from local state
      const filteredResumes = resumes.filter((item) => {
        return item.id !== resumeObj.id;
      });
      setResumes(filteredResumes);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, signOutHandler , deleteResume}}>
      {children}
    </UserContext.Provider>
  );
};
