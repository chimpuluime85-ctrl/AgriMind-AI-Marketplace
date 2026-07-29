function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "12px",
        padding: "20px",
        boxShadow:
          "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: "10px",
            color: "#2e7d32",
          }}
        >
          {product.name}
        </h2>

        <p
          style={{
            color: "#555",
            minHeight: "60px",
          }}
        >
          {product.description}
        </p>

        <h3
          style={{
            color: "#1565c0",
          }}
        >
          ₦{product.price}
        </h3>

        <p>
          <strong>Stock:</strong>{" "}
          {product.quantity}
        </p>

        <p>
          <strong>Farmer:</strong>{" "}
          {product.farmer.fullName}
        </p>
      </div>

      <button
        style={{
          marginTop: "15px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        View Details
      </button>
    </div>
  );
}

export default ProductCard;