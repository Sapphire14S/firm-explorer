import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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

        <button className="nav-btn" onClick={toggleDarkMode}>
          🌙
        </button>

      </div>

    </nav>
  );
}

export default Navbar;