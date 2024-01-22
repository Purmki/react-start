
import {signInWithEmailAndPassword} from "firebase/auth"
import Login from "../components/login";
import SignUp from "../components/signUp";
import { useState } from "react";
import {db} from "../config/fireBase";
import { auth } from "../config/fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Auth(props) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({})
  

  const toggleFormMode = () => {
    setIsLoginMode(!isLoginMode);
};

const changeHandler = (e) => {
    console.log(e);
    setFormData({...formData, [e.target.name]: e.target.value});
}


const submitHandler = (e) => {
  e.preventDefault();
  console.log(formData);
try {
    if (!isLoginMode){
    createUserWithEmailAndPassword(auth, formData.userEmail, formData.userPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed in
      const user = userCredential.user;
      props.setUser(user);

    })
    .catch((error) => {
      console.log(error);
    })
  }
  else{
    signInWithEmailAndPassword(auth, formData.userEmail, formData.userPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // Signed up
      const user = userCredential.user;
      props.setUser(user);
      console.log("user has entered");
    })
    .catch((error) => {
      console.log(error);
    })
  }
  } catch (error) {
  console.log(error);
  }
  
}




  return (
    <div>
    {props.user? <button onClick={props.signOutHandler}>sign out</button>: ""}  
      {isLoginMode ? <Login changeHandler={changeHandler} submitHandler={submitHandler} isLoginMode={isLoginMode} /> 
       : <SignUp changeHandler={changeHandler} submitHandler={submitHandler} isLoginMode={isLoginMode} />}
      <p onClick={toggleFormMode}>{isLoginMode ? "Sign Up" : "Sign In"}</p>
    </div>
  );
}


 


export default Auth;
