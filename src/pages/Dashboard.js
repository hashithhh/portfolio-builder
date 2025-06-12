import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({ title: "", github: "", demo: "", screenshot: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [template, setTemplate] = useState("classic");

  const navigate = useNavigate();

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const addProject = () => {
    if (project.title && project.github) {
      setProjects([...projects, project]);
      setProject({ title: "", github: "", demo: "", screenshot: "" });
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setResumeFile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const data = { bio, skills, projects, resume: resumeFile, template };
    localStorage.setItem("portfolio_profile", JSON.stringify(data));
    alert("✅ Profile, Projects, Resume & Template Saved!");
  };

  const handlePreview = () => {
    handleSave();
    navigate("/preview");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#f0f2f5", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "600px", width: "100%", background: "#fff", padding: "30px", borderRadius: "20px", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px", color: "#5a189a" }}>👤 Developer Dashboard</h2>

        <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Write a short bio..." style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "1px solid #ccc", marginBottom: "20px" }} />

        <h4>Skills</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input type="text" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Enter a skill" style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #bbb" }} />
          <button onClick={addSkill} style={{ background: "#1f6feb", color: "#fff", padding: "10px 16px", borderRadius: "8px", border: "none", fontWeight: "600" }}>Add</button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {skills.map((s, i) => (
            <li key={i} style={{ background: "#eee", padding: "8px 12px", borderRadius: "6px", margin: "4px 0" }}>{s}</li>
          ))}
        </ul>

        <h4 style={{ marginTop: "20px" }}>Projects</h4>
        <input placeholder="Project Title" value={project.title} onChange={(e) => setProject({ ...project, title: e.target.value })} style={inputStyle} />
        <input placeholder="GitHub Link" value={project.github} onChange={(e) => setProject({ ...project, github: e.target.value })} style={inputStyle} />
        <input placeholder="Live Demo (optional)" value={project.demo} onChange={(e) => setProject({ ...project, demo: e.target.value })} style={inputStyle} />
        <input placeholder="Screenshot URL (optional)" value={project.screenshot} onChange={(e) => setProject({ ...project, screenshot: e.target.value })} style={inputStyle} />
        <button onClick={addProject} style={{ ...buttonStyle, background: "#0077ff" }}>➕ Add Project</button>

        <input type="file" accept=".pdf" onChange={handleResumeUpload} style={{ margin: "20px 0", padding: "10px", width: "100%" }} />

        {/* Template Selector */}
        <h4 style={{ marginBottom: "10px" }}>Template Style</h4>
        <select value={template} onChange={(e) => setTemplate(e.target.value)} style={inputStyle}>
          <option value="classic">🎓 Classic</option>
          <option value="modern">✨ Modern</option>
        </select>

        <button onClick={handleSave} style={buttonStyle}>💾 Save All Details</button>
        <button onClick={handlePreview} style={{ ...buttonStyle, background: "#2ecc71" }}>🔍 Preview Portfolio</button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#1f6feb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  marginBottom: "10px",
  cursor: "pointer"
};
