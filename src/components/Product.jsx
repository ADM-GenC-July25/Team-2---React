import React from 'react'

function Product({ item }) {
  return (
    <div className="product">
      <img src={item.img} alt={item.shortDesc} style={{ maxWidth: '200px' }} />
      <h2>${item.price}</h2>
      <h3>{item.shortDesc}</h3>
      <p>{item.longDesc}</p>
      <div>
        <h4>Reviews:</h4>
        <ul>
          {item.reviews && item.reviews.length > 0 ? (
            item.reviews.map((review, idx) => (
              <li key={idx}>{review}</li>
            ))
          ) : (
            <li>No reviews yet.</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Product