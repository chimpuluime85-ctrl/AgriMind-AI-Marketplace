import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div>

        <h2 className="product-name">
          🌾 {product.name}
        </h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-price">
          ₦{Number(product.price).toLocaleString()}
        </div>

        <p className="product-info">
          📦 <strong>Stock:</strong> {product.quantity}
        </p>

        <p className="product-info">
          👨‍🌾 <strong>Farmer:</strong> {product.farmer.fullName}
        </p>

      </div>

      <button className="view-btn">
        View Details
      </button>

    </div>
  );
}

export default ProductCard;