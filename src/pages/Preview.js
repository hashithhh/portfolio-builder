import React from "react";
import { motion } from "framer-motion";

export default function Preview() {
  const stored = localStorage.getItem("portfolio_profile");
  const profile = stored ? JSON.parse(stored) : {};
  const { theme = "template1" } = profile;

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px 20px",
        background: "linear-gradient(to right, #f9f9f9, #eef1f5)",
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          maxWidth: "1100px",
          margin: "auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px 20px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
          width: "100%"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "2rem",
            marginBottom: "30px",
            color: "#5a189a"
          }}
        >
          🚀 Developer Portfolio
        </motion.h1>
        {theme === "template2" ? <TemplateTwo data={profile} /> : <TemplateOne data={profile} />}
      </motion.div>
    </div>
  );
}


function TemplateOne({ data }) {
  const { bio, skills = [], projects = [], resume } = data;

  return (
    <div style={{ fontFamily: "Poppins", padding: "20px", boxSizing: "border-box", width: "100%" }}>
      <h2 style={{ color: "#5a189a", marginBottom: "20px" }}>👤 {bio || "No bio added"}</h2>

      <h3 style={{ fontSize: "1.2rem", color: "#333" }}>🛠 Skills</h3>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0, flexWrap: "wrap", marginTop: "10px" }}>
        {skills.map((s, i) => (
          <li key={i} style={{ background: "#1f6feb", color: "#fff", padding: "8px 12px", borderRadius: "8px" }}>{s}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "30px", fontSize: "1.2rem", color: "#333" }}>📎 Resume</h3>
      {resume ? (
  <a
    href={resume}
    download="My_Resume.pdf"
    style={{
      background: "#1f6feb",
      color: "white",
      padding: "10px 18px",
      borderRadius: "10px",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "600",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  >
    ⬇️ Download My Resume
  </a>
) : (
  <p>No resume uploaded.</p>
)}


      <h3 style={{ marginTop: "30px", fontSize: "1.2rem", color: "#333" }}>📦 Projects</h3>
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "10px", marginTop: "10px", boxSizing: "border-box" }}
        >
          <h4>{proj.title}</h4>
          <p>
            <a href={proj.github}>🔗 GitHub</a>
            {proj.demo && <> | <a href={proj.demo}>🌐 Demo</a></>}
          </p>
          {proj.screenshot && <img src={proj.screenshot} alt="project" style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />}
        </motion.div>
      ))}
    </div>
  );
}

function TemplateTwo({ data }) {
  const { bio, skills = [], projects = [], resume } = data;

  return (
    <div style={{ background: "#e6fff7", padding: "20px", fontFamily: "Segoe UI", boxSizing: "border-box", width: "100%" }}>
      <h1 style={{ color: "#2ecc71", fontWeight: "700", marginBottom: "20px" }}>{bio || "No bio added"}</h1>

      <section style={{ marginTop: "20px" }}>
        <h3>🛠 Skills</h3>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", listStyle: "none", padding: 0, marginTop: "10px" }}>
          {skills.map((skill, idx) => (
            <li key={idx} style={{ background: "#27ae60", color: "#fff", padding: "8px 12px", borderRadius: "8px" }}>{skill}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>📎 Resume</h3>
       {resume ? (
  <a
    href={resume}
    download="My_Resume.pdf"
    style={{
      background: "#1f6feb",
      color: "white",
      padding: "10px 18px",
      borderRadius: "10px",
      textDecoration: "none",
      display: "inline-block",
      fontWeight: "600",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
  >
    ⬇️ Download My Resume
  </a>
) : (
  <p>No resume uploaded.</p>
)}

        
      </section>

      <section style={{ marginTop: "30px" }}>
        <h3>📦 Projects</h3>
        {projects.length > 0 ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "10px", width: "100%", boxSizing: "border-box" }}
              >
                <h4>{proj.title}</h4>
                <p>
                  <a href={proj.github}>🔗 GitHub</a>
                  {proj.demo && <> | <a href={proj.demo}>🌐 Demo</a></>}
                </p>
                {proj.screenshot && <img src={proj.screenshot} alt="project" style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />}
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No projects added.</p>
        )}
      </section>
    </div>
  );
}
