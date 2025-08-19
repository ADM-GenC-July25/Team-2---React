const LoginRegistrationHeader = ({ title, content }) => (
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h2
      style={{
        fontSize: "2.5em",
        color: "#1a1a2e",
        marginBottom: "15px",
        background: "linear-gradient(45deg, #f093fb, #f5576c)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {title}
    </h2>
    <p
      style={{
        fontSize: "1.2em",
        color: "#666",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      {content}
    </p>
  </div>
);

export default LoginRegistrationHeader;
