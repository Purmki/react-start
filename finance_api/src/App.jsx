import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Navbar from "./pages/Navbar";
import Favorites from "./pages/Favorites";
import { useEffect } from "react";
import { auth } from "./componenets/config/firebase";
import LearnMore from "./componenets/learnMore";
import ThemeProvider from "./context/theme";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        console.log(userCredential);
        setUser({ uid: userCredential.uid, email: userCredential.email });
      } else {
        setUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const signOutHandler = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route
            path="/auth"
            element={
              <Auth
                user={user}
                setUser={setUser}
                signOutHandler={signOutHandler}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites user={user} setUser={setUser} />}
          />
          <Route path="/learn-more/:id" element={<LearnMore user={user} />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
