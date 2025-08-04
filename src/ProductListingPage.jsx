import products from "./assets/productListData";
import ProductListingGrid from "./components/ProductListingGrid";

function ProductListingPage() {
  const productList = products;
  return (
    <div>
      <h1>Product Listings</h1>
      <ProductListingGrid productList={productList} />
    </div>
  );
}

export default ProductListingPage;
