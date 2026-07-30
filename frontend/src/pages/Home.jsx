import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import productService from "../services/productService";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productService.getProducts();
      setProducts(response.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <h1>🌾 AgriMind Marketplace</h1>
        <p>
          Buy fresh farm products directly from trusted farmers.
        </p>
      </section>

      <section className="products-section">
        <h2>Available Products</h2>

        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

<div className="search-container">
  <input
    type="text"
    placeholder="🔍 Search for maize, cassava, tomatoes..."
  />
</div>

export default Home;