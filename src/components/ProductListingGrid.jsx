import ProductListing from "./ProductListing";

function ProductListingGrid({ productList }) {
  return (
    <div>
      {productList.map((product) => (
        <ProductListing key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListingGrid;
