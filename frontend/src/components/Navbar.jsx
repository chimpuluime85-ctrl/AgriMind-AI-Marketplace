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
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <Link to="/">Home</Link>

        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/my-products">
              My Products
            </Link>

            <Link to="/create-product">
              Add Product
            </Link>

            <Link to="/ai-assistant">
              AI Assistant
            </Link>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">
              Register
            </Link>
          </>
        )}
      </div>

      <div
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </div>
    </nav>
  );
}

export default Navbar;