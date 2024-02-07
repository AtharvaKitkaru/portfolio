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
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useRef } from "react";

function App() {
  const ref = useRef(null);
  const [navHidden, setNavHidden] = useState(false);
  const { scrollY } = useScroll(ref);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setNavHidden(true);
    }
  });

  return (
    <Router>
      <Routes>
        <Route path="/qualifcations/#ofss" />
      </Routes>
      <div className="App font-poppins text-wrap" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="visible"
          animate={navHidden ? "hidden" : "visible"}
          className="sticky top-0 z-10 bg-white dark:bg-slate-100 "
        >
          <Header />
        </motion.div>
        <div className="z-0 bg-background dark:bg-dark-background text-copy-light dark:text-dark-copy-lighter px-9">
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
