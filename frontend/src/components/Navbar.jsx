import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        🌱 <span>AgriMind</span>
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

        {token ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link to="/my-products" onClick={() => setMenuOpen(false)}>My Products</Link>
            <Link to="/create-product" onClick={() => setMenuOpen(false)}>Add Product</Link>
            <Link to="/ai-assistant" onClick={() => setMenuOpen(false)}>AI Assistant</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;