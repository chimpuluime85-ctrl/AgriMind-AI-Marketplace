import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [totalProducts, setTotalProducts] =
    useState(0);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/products/my-products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTotalProducts(
        response.data.products.length
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          backgroundColor: "#f5f7fa",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Farmer Dashboard
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Manage your products and marketplace activities
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Welcome</h3>
              <p>{user?.fullName}</p>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Total Products</h3>
              <h2
                style={{
                  color: "#2e7d32",
                }}
              >
                {totalProducts}
              </h2>
            </div>

            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h3>Role</h3>
              <p>{user?.role}</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link to="/create-product">
              <button
                style={{
                  padding: "14px 24px",
                  backgroundColor: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Add New Product
              </button>
            </Link>

            <Link to="/my-products">
  <button
    style={{
      padding: "14px 24px",
      backgroundColor: "#1565c0",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    My Products
  </button>
</Link>

<Link to="/ai-assistant">
  <button
    style={{
      padding: "14px 24px",
      backgroundColor: "#ff9800",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
    Ask AgriMind AI
  </button>
</Link>

            <Link to="/my-products">
              <button
                style={{
                  padding: "14px 24px",
                  backgroundColor: "#1565c0",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                My Products
              </button>
            </Link>
          </div>

          <div
            style={{
              marginTop: "50px",
              background: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2>Quick Actions</h2>

            <p>
              Add new products, manage existing
              products, and grow your agricultural
              business through the AgriMind Marketplace.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;