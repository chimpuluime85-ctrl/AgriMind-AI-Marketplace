import { useEffect, useState } from "react";
import api from "../services/api";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "50px 20px",
          background: "#e8f5e9",
        }}
      >
        <h1>AgriMind Marketplace</h1>

        <p>
          Buy fresh farm products directly
          from trusted farmers
        </p>
      </div>

      <div
  style={{
    padding: "30px",
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  }}
>
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>

      <Footer />
    </>
  );
}

export default Products;