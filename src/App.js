import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview"; 
import Publish from "./pages/Publish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
    </Router>
  );
}

export default App;

