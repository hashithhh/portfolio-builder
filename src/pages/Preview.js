import React from "react";

export default function Preview() {
  const stored = localStorage.getItem("portfolio_profile");
  const profile = stored ? JSON.parse(stored) : {};
  const { bio, skills = [], projects = [], resume, template = "classic" } = profile;

  const renderClassic = () => (
    <>
      <Section title="👤 Bio" content={bio || "No bio added yet."} />
      <SkillSection skills={skills} />
      <ResumeSection resume={resume} />
      <ProjectSection projects={projects} />
    </>
  );

  const renderModern = () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "30px" }}>
      <div>
        <Section title="👤 Bio" content={bio || "No bio added yet."} />
        <ResumeSection resume={resume} />
        <SkillSection skills={skills} />
      </div>
      <ProjectSection projects={projects} />
    </div>
  );

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "40px", background: "#f9fbfd", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1100px", margin: "auto", background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", fontWeight: "700", marginBottom: "30px", color: "#222" }}>🚀 Developer Portfolio</h1>
        {template === "modern" ? renderModern() : renderClassic()}
      </div>
    </div>
  );
}

function Section({ title, content }) {
  return (
    <section style={{ marginBottom: "30px" }}>
      <h2 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

function SkillSection({ skills }) {
  return (
    <Section title="🛠 Skills" content={
      skills.length > 0 ? (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: 0, listStyle: "none" }}>
          {skills.map((skill, i) => (
            <li key={i} style={{ background: "#1f6feb", color: "white", padding: "8px 14px", borderRadius: "10px" }}>{skill}</li>
          ))}
        </ul>
      ) : "No skills added yet."
    } />
  );
}

function ResumeSection({ resume }) {
  return (
    <Section title="📎 Resume" content={
      resume ? (
        <a href={resume} download="resume.pdf" style={{ background: "#2d87f0", color: "white", padding: "10px 18px", borderRadius: "10px", textDecoration: "none" }}>
          ⬇️ Download Resume
        </a>
      ) : "No resume uploaded yet."
    } />
  );
}

function ProjectSection({ projects }) {
  return (
    <Section title="📦 Projects" content={
      projects.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map((proj, i) => (
            <div key={i} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
              <h3>{proj.title}</h3>
              <p>
                <a href={proj.github} target="_blank" rel="noreferrer">🔗 GitHub</a>
                {proj.demo && <> | <a href={proj.demo} target="_blank" rel="noreferrer">🌐 Live Demo</a></>}
              </p>
              {proj.screenshot && <img src={proj.screenshot} alt="project" style={{ width: "100%", borderRadius: "10px", marginTop: "10px" }} />}
            </div>
          ))}
        </div>
      ) : "No projects added yet."
    } />
  );
}
