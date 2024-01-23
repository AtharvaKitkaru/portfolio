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
    <div className="App font-cubano">
      <div className="sticky top-0 z-10 bg-slate-100 ">
        <Header />
      </div>
      <div className="z-0 bg-[rgb(32,39,55)] text-white">
        <Home />
        <About />
        <Qualifications />
      </div>
    </div>
  );
}

export default App;
