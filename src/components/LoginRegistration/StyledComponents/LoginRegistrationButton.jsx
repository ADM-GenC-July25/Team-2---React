import { buttonStyle, disabledButtonStyle } from "./LoginStyles";

const LoginRegistrationButton = ({ children, isActive, ...props }) => (
  <button
    type="submit"
    style={isActive ? buttonStyle : disabledButtonStyle}
    className={"login-button"}
    {...props}
  >
    <style>
      {`
          .login-button:hover {
            transform: scale(1.05);
          }
        `}
    </style>
    {children}
  </button>
);

export default LoginRegistrationButton;
