import { useState } from "react";
import LoginDisplay from "./components/LoginDisplay";
import ForgotPasswordDisplay from "./components/ForgotPasswordDisplay";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [page, setPage] = useState("login");
  const [password, setPassword] = useState("");

  let logInPage = false;
  if (page === "login") {
    logInPage = true;
  }

  return logInPage ? (
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
  );
}

export default LoginPage;
