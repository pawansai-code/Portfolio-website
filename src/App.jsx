import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Hackathons from "./components/Hackathons";
import Header from "./components/Header";
import Home from "./components/Home";
import SkillProjects from "./components/SkillProjects";
import Workshops from "./components/Workshops";

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
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
