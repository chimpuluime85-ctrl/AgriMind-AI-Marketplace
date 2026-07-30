import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🌾 🌾 <span>AgriMind</span>
      </Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          Marketplace
        </Link>

        {!token ? (
          <>
            <Link to="/login" onClick={closeMenu}>
              Farmer Login
            </Link>

            <Link
              to="/register"
              className="register-btn"
              onClick={closeMenu}
            >
              Register as Farmer
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>

            <Link to="/my-products" onClick={closeMenu}>
              My Products
            </Link>

            <Link to="/create-product" onClick={closeMenu}>
              Add Product
            </Link>

            <Link to="/ai-assistant" onClick={closeMenu}>
              AI Assistant
            </Link>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;