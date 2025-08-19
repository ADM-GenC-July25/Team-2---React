import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";
import { loginFormStyle } from "./StyledComponents/LoginStyles";
import LoginRegistrationEmoji from "./StyledComponents/LoginRegistrationEmoji";
import LoginRegistrationFooter from "./StyledComponents/LoginRegistrationFooter";
import LoginRegistrationInput from "./StyledComponents/LoginRegistrationInput";
import LoginRegistrationButton from "./StyledComponents/LoginRegistrationButton";

function LoginDisplay({ email, setEmail, password, setPassword, setPage }) {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useLogin();

  function changePassword(event) {
    setPassword(event.target.value);
  }

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function handleForgotPassword() {
    setPage("forgotPassword");
  }

  function onClickLogIn() {
    // TODO: LOG IN THE USER
    console.log("ATTEMPED LOGIN");
    setIsLoggedIn(true);
    navigate("/");
  }

  let canLogIn = false;
  if (email.length > 0 && password.length > 0) {
    canLogIn = true;
  }

  return (
    <div style={loginFormStyle}>
      <LoginRegistrationEmoji
        emoji={"👨‍🚀"}
        title={"Crew Access Portal"}
        content={"Please enter your space credentials"}
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

      <LoginRegistrationButton
        isActive={canLogIn}
        onClick={() => onClickLogIn()}
      >
        Submit
      </LoginRegistrationButton>

      <LoginRegistrationFooter
        switchScreenPrompt={"Forget your space password?"}
        clickableText={"Reset it here!"}
        onClick={() => handleForgotPassword()}
      />

      <LoginRegistrationFooter
        switchScreenPrompt={"New to the cosmos?"}
        clickableText={"Create A Space Account!"}
        onClick={() => navigate("/register")}
      />
    </div>
  );
}

export default LoginDisplay;
