import { Link } from "react-router-dom";
import "../design/Navbar.css"

function Navbar() {
  return (
    <div><nav>
    <Link to="/">Home </Link>
  <Link to="/ResumeDisplay">my resume</Link>
  <Link to="/Auth"> Auth</Link>
</nav></div>
    
  )
}

export default Navbar