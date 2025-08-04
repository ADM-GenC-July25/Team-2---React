import ProductListing from "./ProductListing";

function ProductListingGrid({ productList }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {productList.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListingGrid;
