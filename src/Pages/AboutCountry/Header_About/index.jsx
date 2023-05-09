import "./Header_About.css";
import { Link } from "react-router-dom";

function Header_About({country}) {
  return (
    <div className="header">
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Header_About;
