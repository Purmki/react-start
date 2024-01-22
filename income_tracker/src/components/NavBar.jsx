import { Link } from "react-router-dom";

function NavBar(){
    return (<nav>
    <Link to="/">Home </Link>
    <Link to="/Income">Income</Link>
    <Link to="/Auth"> Auth</Link>
  
  </nav>)
}
export default NavBar;