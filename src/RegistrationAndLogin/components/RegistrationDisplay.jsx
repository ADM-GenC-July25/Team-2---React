import { useNavigate } from "react-router-dom";
import SubmissionButton from "../../components/SubmissionButton";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-[Nunito] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">Register</h1>

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

        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="password"
        >
          Confirm Password
        </label>
        <input
          id="password2"
          type="password"
          autoComplete="off"
          placeholder="Retype your password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password2}
          onChange={(event) => changePassword2(event)}
        />

        <SubmissionButton
          isActive={canRegister}
          onClick={() => handleRegister()}
        >
          Register
        </SubmissionButton>

        <div className="flex justify-center mt-4">
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Already a member? Log in here
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationDisplay;
