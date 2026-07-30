import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        {product.imageUrl ? (
          <img src={product.imageUrl} alt={product.name} />
        ) : (
          <div className="image-placeholder">🌾</div>
        )}
      </div>

      <div className="product-content">
        <h2 className="product-name">{product.name}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-price">
          ₦{Number(product.price).toLocaleString()}
        </div>

        <p className="product-info">
          📦 <strong>Stock:</strong> {product.quantity}
        </p>

        <hr />

        <p className="product-info">
          👨‍🌾 <strong>Seller:</strong> {product.farmer.fullName}
        </p>

        <p className="product-info">
          📧 {product.farmer.email}
        </p>

        {product.farmer.phone && (
          <p className="product-info">
            📞 {product.farmer.phone}
          </p>
        )}

        {product.farmer.isVerified && (
          <p className="verified-badge">
            ✅ Verified Farmer
          </p>
        )}
      </div>

      <Link
        to={`/product/${product.id}`}
        className="view-btn"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;