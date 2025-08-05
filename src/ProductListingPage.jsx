import products from "./assets/productListData";
import ProductListingGrid from "./components/ProductListingGrid";
import { useState } from "react";

function ProductListingPage() {
  const [searchText, setSearchText] = useState("");
  const DEFAULT_SEARCH_BAR_VALUE = "search...";

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  const productList = products;

  return (
    <div>
      <h1>Product Listings</h1>
      <input
        onChange={(event) => handleSearchTextChange(event)}
        value={searchText}
        placeholder={DEFAULT_SEARCH_BAR_VALUE}
      ></input>
      <ProductListingGrid productList={productList} searchTerm={searchText} />
    </div>
  );
}

export default ProductListingPage;
