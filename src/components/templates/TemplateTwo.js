import React from "react";

export default function TemplateTwo({ data }) {
  const { bio, skills = [], projects = [], resume } = data;

  return (
    <div style={{ background: "#f0fff0", padding: "30px", fontFamily: "Segoe UI" }}>
      <h1 style={{ color: "#2ecc71", fontWeight: "700" }}>{bio || "No bio added"}</h1>

      <section style={{ marginTop: "20px" }}>
        <h3>🛠 Skills</h3>
        {skills.length > 0 ? (
          <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0 }}>
            {skills.map((skill, idx) => (
              <li key={idx} style={{ background: "#27ae60", color: "#fff", padding: "8px 12px", borderRadius: "8px" }}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills listed</p>
        )}
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>📎 Resume</h3>
        {resume ? (
          <a href={resume} download style={{ background: "#2ecc71", padding: "10px 16px", color: "#fff", borderRadius: "8px", textDecoration: "none" }}>
            ⬇️ Download Resume
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
              <div key={i} style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "10px" }}>
                <h4>{proj.title}</h4>
                <p>
                  <a href={proj.github}>🔗 GitHub</a>
                  {proj.demo && <> | <a href={proj.demo}>🌐 Demo</a></>}
                </p>
                {proj.screenshot && <img src={proj.screenshot} alt="" style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />}
              </div>
            ))}
          </div>
        ) : (
          <p>No projects added.</p>
        )}
      </section>
    </div>
  );
}
