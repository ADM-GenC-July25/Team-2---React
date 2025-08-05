function ProductListing({ product, addToCart, openItemPage }) {
  return (
    <div
      onClick={() => openItemPage()}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "12px 0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        maxWidth: "300px",
        background: "#3d3838ff",
      }}
    >
      <h3 style={{ margin: "0 0 8px 0" }}>{product.name}</h3>
      <img
        src={product.img}
        alt={product.shortDesc}
        style={{ width: "100%", borderRadius: "4px", marginBottom: "8px" }}
      />
      <p style={{ margin: "0 0 8px 0" }}>{product.shortDesc}</p>
      <div
        style={{ fontWeight: "bold", color: "#2a7" }}
      >{`$${product.price}`}</div>
      <button onClick={() => addToCart()}>Add to Cart</button>
    </div>
  );
}

export default ProductListing;
