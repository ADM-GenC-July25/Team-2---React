function LoginRegistrationEmoji({ emoji, title, content }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <div style={{ fontSize: "3em", marginBottom: "10px" }}>{emoji}</div>
      <h3 style={{ color: "white", marginBottom: "5px" }}>{title}</h3>
      <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9em" }}>
        {content}
      </p>
    </div>
  );
}

export default LoginRegistrationEmoji;
