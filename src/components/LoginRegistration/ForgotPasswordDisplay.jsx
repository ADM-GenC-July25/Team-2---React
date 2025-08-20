import { useNavigate } from "react-router-dom";
import { loginFormStyle } from "./StyledComponents/LoginStyles";
import LoginRegistrationEmoji from "./StyledComponents/LoginRegistrationEmoji";
import LoginRegistrationInput from "./StyledComponents/LoginRegistrationInput";
import LoginRegistrationButton from "./StyledComponents/LoginRegistrationButton";

function ForgotPasswordDisplay({ email, setEmail, setPage }) {
  const navigate = useNavigate();

  function changeEmail(event) {
    setEmail(event.target.value);
  }

  function handleGoBack() {
    setEmail("");
    setPage("login");
  }

  function onClickSubmit() {
    // TODO: SEND FORGOT PASSWORD EMAIL
    console.log("ATTEMPED FORGOT PASSWORD SUBMISSION");
    setEmail("");
    setPage("login");
  }

  let canSubmit = false;
  if (email.length > 0) {
    canSubmit = true;
  }

  return (
    <div style={loginFormStyle}>
      <LoginRegistrationEmoji
        emoji={"❓"}
        title={"Password Reset"}
        content={"Please enter your email"}
      />

      <LoginRegistrationInput
        id="email"
        type="text"
        autoComplete="email"
        placeholder="Type your email"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={email}
        onChange={(event) => changeEmail(event)}
      />

      <div className="flex justify-around gap-x-4 mt-4">
        <LoginRegistrationButton isActive={true} onClick={() => handleGoBack()}>
          Go Back
        </LoginRegistrationButton>
        <LoginRegistrationButton
          isActive={canSubmit}
          onClick={() => onClickSubmit()}
        >
          Submit
        </LoginRegistrationButton>
      </div>
    </div>
  );
}

export default ForgotPasswordDisplay;
