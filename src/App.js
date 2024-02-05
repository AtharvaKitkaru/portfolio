import Home from "./components/Home.js";
import Header from "./common/Header.js";
import Qualifications from "./components/Qualifications.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Certifications from "./components/Certifications.js";
import Projects from "./components/Projects.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Publications from "./components/Publications.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/qualifcations/#ofss" />
        {/* <Route path="/#section2" component={Projects} /> */}
        {/* Add more Switch for other sections if needed */}
      </Routes>
      <div className="App font-poppins text-wrap">
        <div className="sticky top-0 z-10 bg-white dark:bg-slate-100 ">
          <Header />
        </div>
        <div className="z-0 bg-slate-200 dark:bg-[#111] text-[#474748] dark:text-[#B2BECD] px-9">
          <Home />

          <About />
          <Qualifications />
          <Skills />
          <Projects />
          <Publications />
          <Certifications />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
