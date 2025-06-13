import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview"; 
import Publish from "./pages/Publish";
import AuthPage from "./pages/AuthPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;

