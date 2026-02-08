import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css"; // Ensure this file exists or remove import if not needed. It was removed earlier.
import Header from "./components/Header";
import Home from "./components/Home";
import SkillProjects from "./components/SkillProjects";

function App() {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill/:skillName" element={<SkillProjects />} />
      </Routes>
    </div>
  );
}

export default App;
