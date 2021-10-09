import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav-links">
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/skills">
        <li>Skills</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
}

export default Navbar;
