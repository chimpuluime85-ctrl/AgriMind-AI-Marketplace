import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import productService from "../services/productService";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await productService.getProductById(id);
      setProduct(response.product);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-card">

        <div className="product-image">
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} />
          ) : (
            <div className="placeholder-image">🌾</div>
          )}
        </div>

        <div className="details-info">

          <h1>{product.name}</h1>

          <h2>₦{Number(product.price).toLocaleString()}</h2>

          <p>{product.description}</p>

          <p>
            <strong>Available Stock:</strong> {product.quantity}
          </p>

          <hr />

          <h3>Seller Information</h3>

          <p>👨‍🌾 {product.farmer.fullName}</p>

          <p>📧 {product.farmer.email}</p>

          <p>📞 {product.farmer.phone || "Not provided"}</p>

          {product.farmer.isVerified && (
            <p className="verified">✅ Verified Farmer</p>
          )}

          <Link to="/" className="back-btn">
            ← Back to Marketplace
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;