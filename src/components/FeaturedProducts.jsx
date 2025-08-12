import React from 'react'

  const sectionStyle = {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };
 
  // Product card styles
  const productGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  };
 
  const productCardStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '20px',
    padding: '25px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  };
 

function FeaturedProducts() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: '#f8f9ff' }}>

      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.8; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
 
          .nav-link:hover {
            background: rgba(78, 205, 196, 0.2);
            transform: translateY(-2px);
          }
 
          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          }
 
          .login-button:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <section style={sectionStyle}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2.5em', 
            color: '#1a1a2e',
            marginBottom: '15px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🌟 Galactic Menu Highlights
          </h2>
          <p style={{ fontSize: '1.2em', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Discover our most popular interplanetary dishes, crafted by expert alien chefs
          </p>
        </div>
 
        <div style={productGridStyle}>
          <div style={productCardStyle} className="product-card">
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🌙</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Lunar Cheese Craters</h3>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Aged moon cheese melted in volcanic craters, served with asteroid herb seasoning
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: '20px'
            }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>⭐ 299 Credits</span>
              <Button>Add to Cart</Button>
            </div>
          </div>
 
          <div style={productCardStyle} className="product-card">
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🔥</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Solar Flare Soup</h3>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Spicy plasma broth with floating meteorite dumplings, guaranteed to warm your soul
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: '20px'
            }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>⭐ 189 Credits</span>
              <Button>Add to Cart</Button>
            </div>
          </div>
 
          <div style={productCardStyle} className="product-card">
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>🌌</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: '15px' }}>Galaxy Swirl Smoothie</h3>
            <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Nebula fruit blend with stardust sprinkles, tastes like the cosmos in a glass
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: '20px'
            }}>
              <span style={{ fontSize: '1.3em', fontWeight: 'bold' }}>⭐ 149 Credits</span>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturedProducts

function Button( {children } ) {
    return (
              <button style={{ 
                padding: '8px 16px', 
                borderRadius: '15px', 
                border: 'none',
                background: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                cursor: 'pointer'
              }}>
                Add to Cart
              </button>
    );

}