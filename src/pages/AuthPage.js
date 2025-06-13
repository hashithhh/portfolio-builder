import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  const handleAuth = (e) => {
    e.preventDefault();
    // Simulate auth: store flag in localStorage
    localStorage.setItem("portfolio_logged_in", "true");
    alert("✅ Logged in successfully!");
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #6a11cb 0%, #2575fc 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
          {isLogin ? "🔐 Login to Portfolio" : "📝 Create an Account"}
        </h2>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            type="submit"
            style={{
              ...buttonStyle,
              background: "#2575fc",
              marginTop: "10px",
            }}
          >
            {isLogin ? "Login" : "Signup"}
          </motion.button>
        </form>

        <p style={{ marginTop: "20px", textAlign: "center", fontSize: "0.9rem" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            style={{ color: "#6a11cb", cursor: "pointer", fontWeight: "600" }}
            onClick={toggleMode}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "10px",
  color: "white",
  border: "none",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "1rem",
};
