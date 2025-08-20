export const sectionStyle = {
  padding: "40px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
};

export const loginFormStyle = {
  background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  borderRadius: "20px",
  padding: "40px",
  maxWidth: "400px",
  margin: "0 auto",
  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
};

export const inputStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "25px",
  border: "none",
  marginBottom: "20px",
  fontSize: "1em",
  background: "rgba(255, 255, 255, 0.9)",
  outline: "none",
};

export const buttonStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
  color: "white",
  fontSize: "1.1em",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.2s ease",
};

export const disabledButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(45deg, #cccccc, #999999)",
  color: "#666666",
  cursor: "not-allowed",
  opacity: 0.6,
  pointerEvents: "none", // prevents interaction
};
