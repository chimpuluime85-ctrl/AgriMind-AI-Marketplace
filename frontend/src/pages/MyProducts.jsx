import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const fetchMyProducts = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.get(
        "/products/my-products",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(
        `/products/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product deleted successfully");

      fetchMyProducts();
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to delete product"
      );
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "80vh",
          padding: "40px 20px",
          backgroundColor: "#f5f7fa",
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
            My Products
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#666",
              marginBottom: "40px",
            }}
          >
            Manage all your farm products
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "25px",
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow:
                    "0 2px 10px rgba(0,0,0,0.08)",
                }}
              >
                <h2>{product.name}</h2>

                <p>{product.description}</p>

                <h3
                  style={{
                    color: "#2e7d32",
                  }}
                >
                  ₦{product.price}
                </h3>

                <p>
                  <strong>Stock:</strong>{" "}
                  {product.quantity}
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#1565c0",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(product.id)
                    }
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#d32f2f",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {products.length === 0 && (
            <div
              style={{
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <h3>No products found</h3>

              <p>
                Create your first product from
                the dashboard.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MyProducts;