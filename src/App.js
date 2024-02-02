import Home from "./components/Home.js";
import Header from "./common/Header.js";
import Qualifications from "./components/Qualifications.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Certifications from "./components/Certifications.js";
import Projects from "./components/Projects.js";

function App() {
  return (
    <div className="App font-cubano text-pretty text-wrap">
      <div className="sticky top-0 z-10 bg-white dark:bg-slate-100 ">
        <Header />
      </div>
      <div className="z-0 bg-slate-200 dark:bg-[rgb(32,39,55)] text-[#989ea5] dark:text-[#B2BECD]">
        <Home />
        {/* <Separator /> */}
        {/* <InfiniteScrollTape /> */}
        <About />
        <Qualifications />
        <Skills />
        <Projects />
        {/* <Publications /> */}
        <Certifications />
      </div>
    </div>
  );
}

export default App;
