import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Header from "./common/Header.js";
import Qualifications from "./components/Qualifications.js";
import About from "./components/About.js";
import Skills from "./components/Certifications.js";
import Certifications from "./components/Projects.js";
import Projects from "./components/Projects.js";
import Publications from "./components/Publications.js";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
