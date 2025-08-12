import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationDisplay from "./components/RegistrationDisplay";
import ValidateEmailDisplay from "./components/ValidateEmailDisplay";

function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [page, setPage] = useState("registration");

  const navigate = useNavigate();

  let registrationPage = false;
  if (page === "registration") {
    registrationPage = true;
  }

  return registrationPage ? (
    <RegistrationDisplay
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      password2={password2}
      setPassword2={setPassword2}
      setPage={setPage}
    />
  ) : (
    <ValidateEmailDisplay code={code} setCode={setCode} setPage={setPage} />
  );
}

export default RegistrationPage;
