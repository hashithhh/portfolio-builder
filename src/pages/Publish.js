import React from "react";
import { useNavigate } from "react-router-dom";

export default function Publish() {
  const navigate = useNavigate();
  const url = window.location.origin + "/preview";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("✅ Link copied to clipboard!");
  };

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: "#f5f7fa",
      minHeight: "100vh",
      padding: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        maxWidth: "600px",
        width: "100%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}>
        <h2 style={{ fontWeight: "700", marginBottom: "20px", color: "#2c3e50" }}>🎉 Your Portfolio is Ready!</h2>
        <p style={{ marginBottom: "30px", fontSize: "1rem", color: "#555" }}>
          Share your portfolio with this link or deploy it online.
        </p>

        <input
          value={url}
          readOnly
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            fontSize: "0.95rem"
          }}
        />

        <button
          onClick={handleCopy}
          style={{
            background: "#1f6feb",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          🔗 Copy Link
        </button>

        <div style={{ marginTop: "40px", color: "#888", fontSize: "0.9rem" }}>
          <p>⚠️ Deploy to Netlify or GitHub Pages to make this public.</p>
          <button
            onClick={() => navigate("/preview")}
            style={{
              marginTop: "12px",
              background: "#2ecc71",
              color: "white",
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            👀 View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
