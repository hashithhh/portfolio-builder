import React from "react";

export default function TemplateOne({ data }) {
  const { bio, skills = [], projects = [], resume } = data;

  return (
    <div style={{ fontFamily: "Poppins", padding: "20px" }}>
      <h2 style={{ color: "#5a189a", marginBottom: "20px" }}>👤 {bio || "No bio added"}</h2>

      <h3>🛠 Skills</h3>
      <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0 }}>
        {skills.map((s, i) => (
          <li key={i} style={{ background: "#1f6feb", color: "#fff", padding: "8px 12px", borderRadius: "8px" }}>{s}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "30px" }}>📎 Resume</h3>
      {resume ? (
        <a href={resume} download style={{ color: "#007bff", fontWeight: "600" }}>⬇️ Download Resume</a>
      ) : (
        <p>No resume uploaded.</p>
      )}

      <h3 style={{ marginTop: "30px" }}>📦 Projects</h3>
      {projects.map((proj, i) => (
        <div key={i} style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "10px", marginTop: "10px" }}>
          <h4>{proj.title}</h4>
          <p>
            <a href={proj.github}>🔗 GitHub</a>
            {proj.demo && <> | <a href={proj.demo}>🌐 Demo</a></>}
          </p>
          {proj.screenshot && <img src={proj.screenshot} alt="" style={{ width: "100%", marginTop: "10px", borderRadius: "10px" }} />}
        </div>
      ))}
    </div>
  );
}
