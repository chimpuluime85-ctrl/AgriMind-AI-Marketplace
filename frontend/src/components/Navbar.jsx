import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav
      style={{
        backgroundColor: "#2e7d32",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🌱 AgriMind</h2>

      <div>
        <a
          href="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        {token ? (
          <>
            <a
              href="/dashboard"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Dashboard
            </a>

            <button
              onClick={handleLogout}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <a
              href="/login"
              style={{
                color: "white",
                marginRight: "20px",
                textDecoration: "none",
              }}
            >
              Login
            </a>

            <a
              href="/register"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Register
            </a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;