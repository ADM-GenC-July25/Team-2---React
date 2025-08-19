import { inputStyle } from "./LoginStyles";
import LoginRegistrationButton from "./LoginRegistrationButton";

const LoginRegistrationForm = ({ title, content }) => (
  <>
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <div style={{ fontSize: "3em", marginBottom: "10px" }}>👨‍🚀</div>
      <h3 style={{ color: "white", marginBottom: "5px" }}>{title}</h3>
      <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.9em" }}>
        {content}
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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
          color: "white",
        }}
      >
        <input type="checkbox" id="remember" style={{ marginRight: "10px" }} />
        <label htmlFor="remember" style={{ fontSize: "0.9em" }}>
          Remember me across the galaxy
        </label>
      </div>

      <LoginRegistrationButton />
    </form>
  </>
);

export default LoginRegistrationForm;
