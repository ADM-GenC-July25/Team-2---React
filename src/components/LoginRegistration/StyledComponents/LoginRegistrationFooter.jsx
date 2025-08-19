const LoginRegistrationFooter = ({
  switchScreenPrompt,
  clickableText,
  onClick,
}) => (
  <div
    style={{
      textAlign: "center",
      marginTop: "25px",
      color: "rgba(255, 255, 255, 0.8)",
    }}
  >
    <p style={{ fontSize: "0.9em" }}>
      {switchScreenPrompt}
      <a
        href="#signup"
        style={{
          color: "white",
          textDecoration: "underline",
          marginLeft: "5px",
        }}
        onClick={onClick}
      >
        {clickableText}
      </a>
    </p>
  </div>
);

export default LoginRegistrationFooter;
