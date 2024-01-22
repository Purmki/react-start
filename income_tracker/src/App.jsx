import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Income from "./pages/Income";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Auth from "./pages/Auth";
import { auth } from "./config/fireBase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
   const listen = onAuthStateChanged(auth,(userCredential)=>{
    if(userCredential){
      setUser({email: userCredential.email})
    }
    else{
    setUser(null)
    }
   })
   return () => {
    listen()
   }
  }, []);
   
const signOutHandler= () =>{
  signOut(auth)
  setUser(null)
}
 
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth setUser={setUser} user={user} signOutHandler={signOutHandler}/>} />
        <Route path="/Income" element={<Income user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
