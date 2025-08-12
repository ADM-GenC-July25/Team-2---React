function HomeLogin() {
 
  const sectionStyle = {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };
 
  // Login form styles
  const loginFormStyle = {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '400px',
    margin: '0 auto',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)'
  };
 
  const inputStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '25px',
    border: 'none',
    marginBottom: '20px',
    fontSize: '1em',
    background: 'rgba(255, 255, 255, 0.9)',
    outline: 'none'
  };
 
  const buttonStyle = {
    width: '100%',
    padding: '15px',
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    color: 'white',
    fontSize: '1.1em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  };
 
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
 
      {/* Login Section */}
      <section style={sectionStyle} id="login">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '2.5em', 
            color: '#1a1a2e',
            marginBottom: '15px',
            background: 'linear-gradient(45deg, #f093fb, #f5576c)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🚀 Join Our Space Crew
          </h2>
          <p style={{ fontSize: '1.2em', color: '#666', maxWidth: '500px', margin: '0 auto' }}>
            Access exclusive recipes and get priority reservations at our orbital dining pods
          </p>
        </div>
 
        <div style={loginFormStyle}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '3em', marginBottom: '10px' }}>👨‍🚀</div>
            <h3 style={{ color: 'white', marginBottom: '5px' }}>Crew Access Portal</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9em' }}>
              Enter your space credentials
            </p>
          </div>
          
          <form>
            <input
              type="email"
              placeholder="🌌 Galactic Email Address"
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="🔐 Secret Space Code"
              style={inputStyle}
            />
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              marginBottom: '25px',
              color: 'white'
            }}>
              <input 
                type="checkbox" 
                id="remember" 
                style={{ marginRight: '10px' }}
              />
              <label htmlFor="remember" style={{ fontSize: '0.9em' }}>
                Remember me across the galaxy
              </label>
            </div>
 
            <button 
              type="submit" 
              style={buttonStyle}
              className="login-button"
            >
              🚀 Launch Into Account
            </button>
          </form>
 
          <div style={{ 
            textAlign: 'center', 
            marginTop: '25px',
            color: 'rgba(255, 255, 255, 0.8)'
          }}>
            <p style={{ fontSize: '0.9em' }}>
              New to the cosmos? 
              <a href="#signup" style={{ 
                color: 'white', 
                textDecoration: 'underline',
                marginLeft: '5px'
              }}>
                Create Space Account
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default HomeLogin;