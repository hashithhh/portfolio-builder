import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({ title: "", github: "", demo: "", screenshot: "" });
  const [resumeFile, setResumeFile] = useState(null);
  const [template, setTemplate] = useState("classic");
  const [theme, setTheme] = useState("template1");

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
    const data = { bio, skills, projects, resume: resumeFile, template, theme };
    localStorage.setItem("portfolio_profile", JSON.stringify(data));
    alert("✅ Profile, Projects, Resume & Template Saved!");
  };

  const handlePreview = () => {
    handleSave();
    navigate("/preview");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(to bottom, #eef2f3, #8e9eab)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "100%",
          maxWidth: "650px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "25px",
            color: "#5a189a",
            fontSize: "1.8rem",
          }}
        >
          👤 Developer Dashboard
        </h2>

        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Write a short bio..."
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            fontSize: "1rem",
          }}
        />

        <h4 style={{ marginBottom: "8px" }}>Skills</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px", flexWrap: "wrap" }}>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Enter a skill"
            style={{
              flex: 1,
              minWidth: "160px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #bbb",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={addSkill}
            style={{
              background: "#1f6feb",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
            }}
          >
            Add
          </motion.button>
        </div>

        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {skills.map((s, i) => (
            <li
              key={i}
              style={{
                background: "#eee",
                padding: "8px 16px",
                borderRadius: "8px",
                fontWeight: "500",
              }}
            >
              {s}
            </li>
          ))}
        </ul>

        <h4 style={{ marginTop: "30px" }}>Projects</h4>
        <input
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="GitHub Link"
          value={project.github}
          onChange={(e) => setProject({ ...project, github: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Live Demo (optional)"
          value={project.demo}
          onChange={(e) => setProject({ ...project, demo: e.target.value })}
          style={inputStyle}
        />
        <input
          placeholder="Screenshot URL (optional)"
          value={project.screenshot}
          onChange={(e) => setProject({ ...project, screenshot: e.target.value })}
          style={inputStyle}
        />
        <motion.button
          whileHover={{ scale: 1.03 }}
          onClick={addProject}
          style={{ ...buttonStyle, background: "#0077ff" }}
        >
          ➕ Add Project
        </motion.button>

        <div style={{ margin: "20px 0" }}>
  <label
    htmlFor="resume-upload"
    style={{
      display: "block",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#444",
    }}
  >
    📎 Upload Your Resume
  </label>
  <input
    id="resume-upload"
    type="file"
    accept=".pdf"
    onChange={handleResumeUpload}
    style={{
      width: "100%",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontSize: "1rem",
    }}
  />
  {resumeFile && (
    <p style={{ fontSize: "0.9rem", color: "#28a745", marginTop: "8px" }}>
      ✅ Resume uploaded successfully!
    </p>
  )}
</div>



        {resumeFile && (
          <p style={{ fontSize: "0.9rem", color: "#28a745", marginBottom: "10px", textAlign: "center" }}>
            ✅ Resume uploaded successfully!
          </p>
        )}

        <h4 style={{ marginBottom: "10px" }}>Template Style</h4>
        <select value={template} onChange={(e) => setTemplate(e.target.value)} style={inputStyle}>
          <option value="classic">🎓 Classic</option>
          <option value="modern">✨ Modern</option>
        </select>

        <h4 style={{ margin: "20px 0 10px" }}>Theme Design</h4>
        <select value={theme} onChange={(e) => setTheme(e.target.value)} style={inputStyle}>
          <option value="template1">🟪 Minimal Purple</option>
          <option value="template2">🟩 Soft Green</option>
        </select>

        <motion.button whileHover={{ scale: 1.03 }} onClick={handleSave} style={buttonStyle}>
          💾 Save All Details
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          onClick={handlePreview}
          style={{ ...buttonStyle, background: "#2ecc71" }}
        >
          🔍 Preview Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#1f6feb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "600",
  marginBottom: "12px",
  cursor: "pointer",
  fontSize: "1rem",
  boxSizing: "border-box",
  transition: "all 0.3s ease-in-out",
};
