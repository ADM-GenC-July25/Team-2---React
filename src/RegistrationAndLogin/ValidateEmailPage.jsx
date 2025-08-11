import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmissionButton from "../components/SubmissionButton";

function ValidateEmailPage() {
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  function changeCode(event) {
    setCode(event.target.value);
  }

  function onClickSubmit() {
    let isValid = false;
    console.log("ATTEMPED SUBMISSION");
    navigate("/");
  }

  let canSubmit = false;
  if (code.length > 0) {
    canSubmit = true;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center font-[Nunito] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6">
          Validate your Email
        </h1>

        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="Validation Code"
        >
          A code has been sent to your email. Please enter it here to validate
          your email.
        </label>
        <input
          id="Validation Code"
          type="text"
          autoComplete="off"
          placeholder="Enter your code"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={code}
          onChange={(event) => changeCode(event)}
        />

        <div className="flex justify-around gap-x-4 mt-4">
          <SubmissionButton
            isActive={true}
            onClick={() => navigate("/register")}
          >
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
            onClick={() => navigate("/login")}
          >
            Already a member? Log in here
          </button>
        </div>
      </div>
    </div>
  );
}

export default ValidateEmailPage;
