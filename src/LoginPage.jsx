import { useState } from "react";
import { sectionStyle } from "./components/LoginRegistration/StyledComponents/LoginStyles";
import LoginRegistrationHeader from "./components/LoginRegistration/StyledComponents/LoginRegistrationHeader";
import LoginDisplay from "./components/LoginRegistration/LoginDisplay";
import ForgotPasswordDisplay from "./components/LoginRegistration/ForgotPasswordDisplay";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [page, setPage] = useState("login");
  const [password, setPassword] = useState("");

  let logInPage = false;
  if (page === "login") {
    logInPage = true;
  }

  return (
    <div
      style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9ff" }}
    >
      <section style={sectionStyle} id="login">
        <LoginRegistrationHeader
          title={"🚀 Welcome Back Captain"}
          content={"Log in to view past galactic orders"}
        />
        {logInPage ? (
          <LoginDisplay
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setPage={setPage}
          />
        ) : (
          <ForgotPasswordDisplay
            email={forgotPasswordEmail}
            setEmail={setForgotPasswordEmail}
            setPage={setPage}
          />
        )}
      </section>
    </div>
  );
}

export default LoginPage;
