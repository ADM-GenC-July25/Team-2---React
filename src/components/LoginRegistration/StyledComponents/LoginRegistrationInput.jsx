import { inputStyle } from "./LoginStyles";

function LoginRegistrationInput({ ...props }) {
  return <input style={inputStyle} {...props} />;
}

export default LoginRegistrationInput;
