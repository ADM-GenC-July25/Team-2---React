import React from 'react'
import Product from './components/Product'

function ProductPage() {
  // Example product data (replace with real data or props as needed)
  const item = {
    img: "https://via.placeholder.com/200",
    price: 19.99,
    shortDesc: "Sample Product",
    longDesc: "This is a longer description of the product.",
    reviews: ["Great!", "Would buy again."]
  }

  return (
    <div>
      <h1>Product Details</h1>
      <Product item={item} />
    </div>
  )
}

export default ProductPage