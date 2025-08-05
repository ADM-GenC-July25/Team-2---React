import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Product.css'

function Product({ item, addToCart, openItemPage }) {
  const navigate = useNavigate()
  
  const handleClick = () => {
    if (openItemPage) {
      openItemPage()
    } else if (item.id) {
      // Navigate to the individual product page
      navigate(`/product/${item.id}`)
    }
  }

  return (
    <div
      className="product-container"
      onClick={handleClick}
    >
      <h3 className="product-title">{item.name}</h3>
      <img
        src={item.img}
        alt={item.shortDesc}
        className="product-image"
      />
      <p className="product-description">{item.shortDesc}</p>
      <div className="product-price">{`$${item.price}`}</div>
      <button 
        className="product-button"
        onClick={addToCart ? (e) => { e.stopPropagation(); addToCart(); } : undefined}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Product