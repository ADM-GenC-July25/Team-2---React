import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Product from './components/Product'
import products from './assets/productListData'
import { useCart } from './CartContext'

function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id))
  
  // If product not found, show error message
  if (!product) {
    return (
      <div className="p-5 text-center">
        <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  const handleAddToCartAndRedirect = () => {
    addToCart(product)
    navigate('/cart')
  }

  return (
    <div className="p-5 flex flex-col items-center min-h-[80vh]">
      <h1 className="mb-8 text-center text-3xl font-bold">Product Details</h1>
      <div className="max-w-md w-full flex flex-col items-center">
        <Product item={product} addToCart={handleAddToCartAndRedirect} />
        {product.longDesc && (
          <div className="my-10 py-5 rounded-xl bg-gray-200 dark:bg-black w-full">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p>{product.longDesc}</p>
          </div>
        )}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-5 p-4 bg-gray-100 rounded-lg w-full max-w-xl">
            <h3 className="text-lg font-semibold mb-2">Reviews</h3>
            {product.reviews.map((review, index) => (
              <p key={index} className="mb-2">"{review}"</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage