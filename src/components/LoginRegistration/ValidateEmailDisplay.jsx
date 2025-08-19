import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";
import { loginFormStyle } from "./StyledComponents/LoginStyles";
import LoginRegistrationEmoji from "./StyledComponents/LoginRegistrationEmoji";
import LoginRegistrationInput from "./StyledComponents/LoginRegistrationInput";
import LoginRegistrationButton from "./StyledComponents/LoginRegistrationButton";

function ValidateEmailDisplay({ code, setCode, setPage }) {
  const navigate = useNavigate();

  const { isLoggedIn, setIsLoggedIn } = useLogin();

  function changeCode(event) {
    setCode(event.target.value);
  }

  function handleGoBack() {
    setCode("");
    setPage("registration");
  }

  function onClickSubmit() {
    let isValid = false;
    setCode("");
    console.log("ATTEMPED SUBMISSION");
    setIsLoggedIn(true);
    navigate("/");
  }

  let canSubmit = false;
  if (code.length > 0) {
    canSubmit = true;
  }

  return (
    <div style={loginFormStyle}>
      <LoginRegistrationEmoji
        emoji={"🔑"}
        title={"Validate email"}
        content={
          "Please enter the code we sent to your email to validate your account."
        }
      />
      <LoginRegistrationInput
        id="Validation Code"
        type="text"
        autoComplete="off"
        placeholder="Enter your code"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={code}
        onChange={(event) => changeCode(event)}
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

export default ValidateEmailDisplay;
