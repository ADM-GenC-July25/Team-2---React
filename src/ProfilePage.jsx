import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./components/LoginRegistration/LoginContext";
import { sectionStyle } from "./components/LoginRegistration/StyledComponents/LoginStyles";
import LoginRegistrationHeader from "./components/LoginRegistration/StyledComponents/LoginRegistrationHeader";
import LoginRegistrationInput from "./components/LoginRegistration/StyledComponents/LoginRegistrationInput";
import LoginRegistrationButton from "./components/LoginRegistration/StyledComponents/LoginRegistrationButton";

function ProfilePage() {
  const { isLoggedIn, userData } = useLogin();
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordChangeMessage, setPasswordChangeMessage] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  function handlePasswordChange() {
    if (newPassword !== confirmPassword) {
      setPasswordChangeMessage("❌ New passwords don't match!");
      return;
    }
    if (newPassword.length < 6) {
      setPasswordChangeMessage("❌ Password must be at least 6 characters!");
      return;
    }
    
    // TODO: Implement actual password change with backend
    console.log("Password change attempted");
    setPasswordChangeMessage("✅ Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    
    // Clear message after 3 seconds
    setTimeout(() => setPasswordChangeMessage(""), 3000);
  }

  const canChangePassword = currentPassword.length > 0 && 
                           newPassword.length > 0 && 
                           confirmPassword.length > 0;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div style={{ 
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%)",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <LoginRegistrationHeader
          title={"👨‍🚀 Crew Profile"}
          content={"Your galactic crew information"}
        />
        
        {/* User Information Section */}
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(78, 205, 196, 0.3)",
          borderRadius: "20px",
          padding: "2rem",
          margin: "2rem auto",
          maxWidth: "600px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
        }}>
          <h2 style={{ 
            color: "#4ecdc4", 
            textAlign: "center", 
            marginBottom: "2rem",
            fontSize: "1.5rem",
            fontWeight: "bold"
          }}>
            🌟 Personal Information
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "1.5rem" 
          }}>
            <div>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#4ecdc4", 
                fontSize: "1rem",
                fontWeight: "600"
              }}>
                🌟 First Name
              </h3>
              <p style={{ 
                margin: "0", 
                padding: "0.75rem", 
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                borderRadius: "10px",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                color: "#b8b8d1"
              }}>
                {userData.firstName || "Not set"}
              </p>
            </div>

            <div>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#4ecdc4", 
                fontSize: "1rem",
                fontWeight: "600"
              }}>
                🌟 Last Name
              </h3>
              <p style={{ 
                margin: "0", 
                padding: "0.75rem", 
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                borderRadius: "10px",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                color: "#b8b8d1"
              }}>
                {userData.lastName || "Not set"}
              </p>
            </div>

            <div>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#4ecdc4", 
                fontSize: "1rem",
                fontWeight: "600"
              }}>
                🚀 Username
              </h3>
              <p style={{ 
                margin: "0", 
                padding: "0.75rem", 
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                borderRadius: "10px",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                color: "#b8b8d1"
              }}>
                {userData.username || "Not set"}
              </p>
            </div>

            <div>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#4ecdc4", 
                fontSize: "1rem",
                fontWeight: "600"
              }}>
                📧 Email
              </h3>
              <p style={{ 
                margin: "0", 
                padding: "0.75rem", 
                backgroundColor: "rgba(255, 255, 255, 0.1)", 
                borderRadius: "10px",
                border: "1px solid rgba(78, 205, 196, 0.3)",
                color: "#b8b8d1"
              }}>
                {userData.email || "Not set"}
              </p>
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(78, 205, 196, 0.3)",
          borderRadius: "20px",
          padding: "2rem",
          margin: "2rem auto",
          maxWidth: "600px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
        }}>
          <h2 style={{ 
            color: "#4ecdc4", 
            textAlign: "center", 
            marginBottom: "2rem",
            fontSize: "1.5rem",
            fontWeight: "bold"
          }}>
            🔐 Change Password
          </h2>

          <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <LoginRegistrationInput
              id="current-password"
              type="password"
              autoComplete="current-password"
              placeholder="🔒 Current Password"
              value={currentPassword}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />
            
            <LoginRegistrationInput
              id="new-password"
              type="password"
              autoComplete="new-password"
              placeholder="🆕 New Password"
              value={newPassword}
              onChange={(event) => setNewPassword(event.target.value)}
            />
            
            <LoginRegistrationInput
              id="confirm-new-password"
              type="password"
              autoComplete="new-password"
              placeholder="✅ Confirm New Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            {passwordChangeMessage && (
              <div style={{
                textAlign: "center",
                margin: "1rem 0",
                padding: "0.75rem",
                borderRadius: "10px",
                backgroundColor: passwordChangeMessage.includes("✅") 
                  ? "rgba(0, 255, 0, 0.1)" 
                  : "rgba(255, 0, 0, 0.1)",
                border: passwordChangeMessage.includes("✅") 
                  ? "1px solid rgba(0, 255, 0, 0.3)" 
                  : "1px solid rgba(255, 0, 0, 0.3)",
                color: passwordChangeMessage.includes("✅") ? "#4ade80" : "#f87171"
              }}>
                {passwordChangeMessage}
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <LoginRegistrationButton
                isActive={canChangePassword}
                onClick={handlePasswordChange}
              >
                🔄 Update Password
              </LoginRegistrationButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage; 