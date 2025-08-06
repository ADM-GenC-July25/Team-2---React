import Product from './Product';

function ProductListing({ product, addToCart, openItemPage }) {
  return (
    <Product 
      item={product} 
      addToCart={addToCart} 
      openItemPage={openItemPage} 
    />
  );
}

export default ProductListing;
