import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme";
import "../design/navbar.css";

function Navbar() {
  const { isDarkMode,toggleDarkMode, selectedTheme } = useContext(ThemeContext);
  console.log({isDarkMode});
  return (
    <nav style={{ ...selectedTheme }}>
      <Link to="/">Home </Link>
      <Link to="/Favorites">favorites</Link>
      <Link to="/Auth"> Auth</Link>
      <button onClick={toggleDarkMode}>{isDarkMode? "light mode" : "dark mode"}</button>
    </nav>
  );
}

export default Navbar;
