const logoStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginBottom: "20px",
};

const logoIcon = {
  width: "60px",
  height: "60px",
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "30px",
  color: "white",
  fontWeight: "bold",
  boxShadow: "0 0 20px rgba(255, 107, 107, 0.5)",
  animation: "pulse 2s infinite",
};

const bannerStyle = {
  background: "linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%)",
  color: "white",
  padding: "60px 20px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const starsStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: `
      radial-gradient(2px 2px at 20px 30px, #fff, transparent),
      radial-gradient(2px 2px at 40px 70px, #fff, transparent),
      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
      radial-gradient(1px 1px at 130px 80px, #fff, transparent),
      radial-gradient(2px 2px at 160px 30px, #fff, transparent),
      radial-gradient(1px 1px at 200px 90px, #fff, transparent),
      radial-gradient(2px 2px at 240px 50px, #fff, transparent),
      radial-gradient(1px 1px at 280px 20px, #fff, transparent),
      radial-gradient(1px 1px at 320px 100px, #fff, transparent),
      radial-gradient(2px 2px at 360px 60px, #fff, transparent)
    `,
  backgroundRepeat: "repeat",
  backgroundSize: "400px 200px",
  opacity: 0.8,
  animation: "twinkle 3s ease-in-out infinite alternate",
};

const planetStyle = {
  position: "absolute",
  top: "20px",
  right: "50px",
  width: "80px",
  height: "80px",
  background: "linear-gradient(45deg, #ff9a9e, #fecfef)",
  borderRadius: "50%",
  opacity: 0.7,
  boxShadow: "0 0 30px rgba(255, 154, 158, 0.3)",
};

const titleStyle = {
  fontSize: "3.5em",
  fontWeight: "bold",
  marginBottom: "20px",
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
  zIndex: 2,
  position: "relative",
};

const subtitleStyle = {
  fontSize: "1.3em",
  marginBottom: "30px",
  color: "#b8b8d1",
  zIndex: 2,
  position: "relative",
  maxWidth: "600px",
};

function Banner() {
  return (
    <div>
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 0.8; }
          }
        `}
      </style>

      {/* Banner with Logo */}
      <header style={bannerStyle}>
        <div style={starsStyle}></div>
        <div style={planetStyle}></div>

        {/* Logo */}
        <div style={logoStyle}>
          <div style={logoIcon}>🛸</div>
          <div
            style={{ fontSize: "1.5em", fontWeight: "bold", color: "#4ecdc4" }}
          >
            COSMIC CUISINE
          </div>
        </div>

        <h1 style={titleStyle}>Galactic Flavors Await!</h1>
        <p style={subtitleStyle}>
          Experience extraordinary dining from across the universe. From Martian
          delicacies to Neptunian noodles, discover flavors that are truly out
          of this world.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "20px",
            zIndex: 2,
            position: "relative",
          }}
        >
          <span
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            🌟 Zero Gravity Dining
          </span>
          <span
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              padding: "8px 16px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            👽 Alien-Approved Recipes
          </span>
        </div>
      </header>
    </div>
  );
}

export default Banner;
