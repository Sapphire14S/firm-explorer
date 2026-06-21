import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Firm Explorer
      </Link>

      <div className="nav-actions">
        <Link to="/" className="nav-btn">
          Search
        </Link>

        <button
          className="nav-btn"
          onClick={toggleDarkMode}
          aria-label="Toggle Theme"
        >
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;