import React, { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { Button, TextField, FormControlLabel, Checkbox, Container } from "@mui/material";
import { auth } from "../config/firebase";
import { UserContext } from "../context/Theme";
import Box from '@mui/material/Box';

function Auth() {
  const { user, setUser, signOutHandler } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (!isLogin) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.userEmail,
          formData.userPassword
        );
        setUser(userCredential.user);
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.userEmail,
          formData.userPassword
        );
        setUser(userCredential.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleFormMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <Container component="main" >
      {user ? (
        <Box>
          <h2>Welcome to resume creator</h2>
          <Button onClick={signOutHandler}>Sign Out</Button>
        </Box>
      ) : (
        <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
            onChange={changeHandler}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          {/* ... other components ... */}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            onClick={toggleFormMode}
          >
            {isLogin ? "Switch to Sign Up" : "Switch to Login"}
          </Button>
        </Box>
      )}
    </Container>
  );
}

export default Auth;