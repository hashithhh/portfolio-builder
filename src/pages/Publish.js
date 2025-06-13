import React from "react";
import "./Publish.css";

const Publish = () => {
  const liveURL = "https://imaginative-stardust-323d19.netlify.app"; // 🔗 your Netlify URL

  return (
    <div className="publish-page" style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontWeight: "bold", fontSize: "2.2rem" }}>🎉 Your Portfolio is Live!</h1>
      <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>Click below to view your live site:</p>
      <a
        href={liveURL}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: "20px",
          display: "inline-block",
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        🚀 View My Portfolio
      </a>
    </div>
  );
};

export default Publish;
