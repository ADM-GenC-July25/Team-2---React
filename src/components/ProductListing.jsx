import Product from './Product';
import { useState } from 'react';
import { useCart } from '../CartContext';

function ProductListing({ product, addToCart, openItemPage }) {
  const [showMsg, setShowMsg] = useState(false);
  const { addToCart: addToCartContext } = useCart();

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart();
    } else {
      addToCartContext(product);
    }
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 1500);
  };

  return (
    <>
      <Product 
        item={product} 
        addToCart={handleAddToCart} 
        openItemPage={openItemPage} 
      />
      {showMsg && (
        <div style={{position:'fixed',top:30,right:30,background:'#2196f3',color:'#fff',padding:'12px 24px',borderRadius:8,zIndex:1000,fontWeight:600,boxShadow:'0 2px 8px #0005'}}>Product was successfully added to your cart!</div>
      )}
    </>
  );
}

export default ProductListing;
