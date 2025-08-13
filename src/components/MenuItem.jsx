import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/MenuItem.css'
import { useCart } from '../CartContext'

function MenuItem({ item, addToCart, openItemPage }) {
  const navigate = useNavigate()
  const { addToCart: addToCartContext } = useCart()

  const handleClick = () => {
    if (openItemPage) {
      openItemPage()
    } else if (item.id) {
      // Navigate to the individual menu item page
      navigate(`/menuitem/${item.id}`)
    }
  }

const handleAddToCart = (e) => {
    e.stopPropagation()
    if (addToCart) {
      addToCart()
    } else {
      addToCartContext(item)
      // alert(`${item.name} added to cart!`)
    }
  }

  return (
    <div
      className="menuitem-container"
      onClick={handleClick}
    >
      {item.img && (
        <img
          src={item.img}
          alt={item.description}
          className="menuitem-image"
        />
      )}
      <div className="menuitem-content">
        <h3 className="menuitem-title">{item.name}</h3>
        <p className="menuitem-description">{item.description}</p>
        <div className="menuitem-price">{item.price}</div>
      </div>
      <button
        className="menuitem-button"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default MenuItem 