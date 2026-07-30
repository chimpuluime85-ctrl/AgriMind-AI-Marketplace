import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get("/products/my-products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTotalProducts(response.data.products.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-container">

          <div className="dashboard-header">
            <h1>👋 Welcome, {user?.fullName}</h1>

            <p>
              Manage your products, monitor your listings, and grow your agricultural business using AgriMind Marketplace.
            </p>
          </div>

          <div className="stats-grid">

            <div className="stat-card">
              <h3>Total Products</h3>
              <div className="stat-number">
                {totalProducts}
              </div>
            </div>

            <div className="stat-card">
              <h3>Role</h3>
              <div className="stat-number">
                {user?.role}
              </div>
            </div>

            <div className="stat-card">
              <h3>Account Status</h3>
              <div className="stat-number">
                Active
              </div>
            </div>

          </div>

          <div className="actions-grid">

            <Link
              to="/create-product"
              className="action-card"
            >
              <div className="action-icon">➕</div>

              <h3>Add Product</h3>

              <p>
                Create a new farm product listing.
              </p>
            </Link>

            <Link
              to="/my-products"
              className="action-card"
            >
              <div className="action-icon">📦</div>

              <h3>My Products</h3>

              <p>
                View and manage your listed products.
              </p>
            </Link>

            <Link
              to="/ai-assistant"
              className="action-card"
            >
              <div className="action-icon">🤖</div>

              <h3>AI Assistant</h3>

              <p>
                Ask AgriMind AI for farming advice.
              </p>
            </Link>

            <Link
              to="/"
              className="action-card"
            >
              <div className="action-icon">🛒</div>

              <h3>Marketplace</h3>

              <p>
                Browse fresh products from farmers.
              </p>
            </Link>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;