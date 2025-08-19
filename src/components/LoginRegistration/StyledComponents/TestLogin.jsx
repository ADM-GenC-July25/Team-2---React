import { sectionStyle, loginFormStyle } from "./LoginStyles";
import LoginRegistrationHeader from "./LoginRegistrationHeader";
import LoginRegistrationForm from "./LoginRegistrationForm";
import LoginRegistrationFooter from "./LoginRegistrationFooter";

const TestLogin = () => (
  <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9ff" }}>
    <section style={sectionStyle} id="login">
      <LoginRegistrationHeader
        title={"🚀 Join Our Space Crew"}
        content={"Save your credentials and view past galactic orders"}
      />
      <div style={loginFormStyle}>
        <LoginRegistrationForm
          title={"Crew Access Portal"}
          content={"Please enter your space credentials"}
        />
        <LoginRegistrationFooter />
      </div>
    </section>
  </div>
);

export default TestLogin;
