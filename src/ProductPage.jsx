import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './components/Product'
import products from './assets/productListData'

function ProductPage() {
  const { id } = useParams()
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id))
  
  // If product not found, show error message
  if (!product) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <p>The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <div style={{ 
      padding: '20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '80vh'
    }}>
      <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Product Details</h1>
      <div style={{ 
        maxWidth: '400px', 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Product item={product} />
        {product.longDesc && (
          <div style={{ 
            marginTop: '20px', 
            padding: '16px', 
            background: '#f5f5f5', 
            borderRadius: '8px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h3>Description</h3>
            <p>{product.longDesc}</p>
          </div>
        )}
        {product.reviews && product.reviews.length > 0 && (
          <div style={{ 
            marginTop: '20px', 
            padding: '16px', 
            background: '#f5f5f5', 
            borderRadius: '8px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <h3>Reviews</h3>
            {product.reviews.map((review, index) => (
              <p key={index}>"{review}"</p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage