import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        DriveZone
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favourites">Favourites</Link>
        <Link to="/manage-cars">Manage Cars</Link>
        <Link to="/api-demo">API Demo</Link>
        <Link to="/reducer-demo">Reducer Demo</Link>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
