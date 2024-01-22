import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookCard from "./components/BookCard";
import Books from "./pages/Books";
import Product from "./pages/product";
import Home from "./pages/home";
import { BrowserRouter,Routes ,Route, Link } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <nav>
      <Link to="/Home">home  </Link>
        <Link to="/Products">products  </Link>
        <Link to="/Books">books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Product />}/>
        <Route path="/Books" element={<Books />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
