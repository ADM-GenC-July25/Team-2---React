import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sectionStyle } from "./components/LoginRegistration/StyledComponents/LoginStyles";
import LoginRegistrationHeader from "./components/LoginRegistration/StyledComponents/LoginRegistrationHeader";
import RegistrationDisplay from "./components/LoginRegistration/RegistrationDisplay";
import ValidateEmailDisplay from "./components/LoginRegistration/ValidateEmailDisplay";

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

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9ff" }}
    >
      <section style={sectionStyle} id="login">
        <LoginRegistrationHeader
          title={"🚀 Join Our Space Crew"}
          content={
            "Join the crew to save your credentials and view past galactic orders"
          }
        />
        {registrationPage ? (
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
          <ValidateEmailDisplay
            code={code}
            setCode={setCode}
            setPage={setPage}
          />
        )}
      </section>
    </div>
  );
}

export default RegistrationPage;
