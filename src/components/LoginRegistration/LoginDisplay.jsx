import { useNavigate } from "react-router-dom";
import SubmissionButton from "../SubmissionButton";
import { useLogin } from "./LoginContext";
import TestLogin from "./StyledComponents/TestLogin";
import HomeLogin from "../HomeLogin";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-[Nunito] px-4">
      <HomeLogin />
      <TestLogin />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>

        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="text"
          autoComplete="email"
          placeholder="Type your email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(event) => changeEmail(event)}
        />

        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="off"
          placeholder="Type your password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(event) => changePassword(event)}
        />

        <SubmissionButton isActive={canLogIn} onClick={() => onClickLogIn()}>
          Log In
        </SubmissionButton>

        <div className="flex justify-end mt-4">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => handleForgotPassword()}
          >
            Forgot Password?
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => navigate("/register")}
          >
            Not a member? Sign up here
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginDisplay;
