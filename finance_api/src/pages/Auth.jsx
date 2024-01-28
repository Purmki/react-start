import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from "../componenets/SignUp";
import Login from "../componenets/Login";
import { useState } from "react";
import { auth } from "../componenets/config/firebase";

function Auth(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});

  const changeHandler = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        createUserWithEmailAndPassword(
          auth,
          formData.userEmail,
          formData.userPassword
        )
          .then((userCredential) => {
            console.log(userCredential);
            // Signed in
            const user = userCredential.user;
            props.setUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          formData.userEmail,
          formData.userPassword
        )
          .then((userCredential) => {
            console.log(userCredential);
            // Signed up
            const user = userCredential.user;
            props.setUser(user);
            console.log("user has entered");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {props.user ? (
        <button onClick={props.signOutHandler}>Sign Out</button>
      ) : (
        ""
      )}
      {!props.user ? (
        <>
          {isLogin ? (
            <Login
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          ) : (
            <SignUp
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          )}
          <h1>welcome to finance managing</h1>
          <button onClick={toggleFormMode}>
            {isLogin ? "Sign Up" : "login"}
          </button>
        </>
      ) : (
        "already connected"
      )}
    </div>
  );
}

export default Auth;
