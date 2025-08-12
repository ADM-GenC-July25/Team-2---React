import { useNavigate } from "react-router-dom";
import SubmissionButton from "../SubmissionButton";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-[Nunito] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">
          Forgot your password?
        </h1>

        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="email"
        >
          Don't worry, we can send instructions on how to reset your password to
          your email.
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

        <div className="flex justify-around gap-x-4 mt-4">
          <SubmissionButton isActive={true} onClick={() => handleGoBack()}>
            Go Back
          </SubmissionButton>
          <SubmissionButton
            isActive={canSubmit}
            onClick={() => onClickSubmit()}
          >
            Submit
          </SubmissionButton>
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

export default ForgotPasswordDisplay;
