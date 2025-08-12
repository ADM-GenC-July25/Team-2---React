import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuItem.css'

function MenuItem({ item, addToCart, openItemPage }) {
  const navigate = useNavigate()
  
  const handleClick = () => {
    if (openItemPage) {
      openItemPage()
    } else if (item.id) {
      // Navigate to the individual menu item page
      navigate(`/menuitem/${item.id}`)
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
        onClick={addToCart ? (e) => { e.stopPropagation(); addToCart(); } : undefined}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default MenuItem 