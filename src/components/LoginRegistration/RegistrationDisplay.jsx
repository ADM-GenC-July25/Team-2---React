import { useNavigate } from "react-router-dom";
import { loginFormStyle } from "./StyledComponents/LoginStyles";
import LoginRegistrationEmoji from "./StyledComponents/LoginRegistrationEmoji";
import LoginRegistrationButton from "./StyledComponents/LoginRegistrationButton";
import LoginRegistrationInput from "./StyledComponents/LoginRegistrationInput";
import LoginRegistrationFooter from "./StyledComponents/LoginRegistrationFooter";

function RegistrationDisplay({
  email,
  setEmail,
  password,
  setPassword,
  password2,
  setPassword2,
  setPage,
}) {
  const navigate = useNavigate();

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function changePassword2(event) {
    setPassword2(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function handleRegister() {
    setPage("validateEmail");
  }

  let canRegister = false;

  if (email.length > 0 && password.length > 0 && password2.length > 0) {
    canRegister = true;
  }

  return (
    <div style={loginFormStyle}>
      <LoginRegistrationEmoji
        emoji={"👨‍🚀"}
        title={"Join our Crew"}
        content={"Please enter new space credentials"}
      />

      <LoginRegistrationInput
        id="email"
        type="email"
        autoComplete="email"
        placeholder="🌌 Galactic Email Address"
        value={email}
        onChange={(event) => changeEmail(event)}
      />
      <LoginRegistrationInput
        id="password"
        type="password"
        autoComplete="password"
        placeholder="🔐 Space Password"
        value={password}
        onChange={(password) => changePassword(password)}
      />

      <LoginRegistrationInput
        id="confirm-password"
        type="password"
        autoComplete="confirm-password"
        placeholder="🔐 Confirm Space Password"
        value={password2}
        onChange={(password2) => changePassword2(password2)}
      />

      <LoginRegistrationButton
        isActive={canRegister}
        onClick={() => handleRegister()}
      >
        Register
      </LoginRegistrationButton>

      <LoginRegistrationFooter
        switchScreenPrompt={"Already part of the crew?"}
        clickableText={"Log in here!"}
        onClick={() => navigate("/login")}
      />
    </div>
  );
}

export default RegistrationDisplay;
