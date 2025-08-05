import ProductListing from "./ProductListing";

function ProductListingGrid({ productList, searchTerm }) {
  let filteredList = productList.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {filteredList.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListingGrid;
