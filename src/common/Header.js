import React, { useState, useEffect } from "react";
import menupng from "../assets/three-lines.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faMoon } from "@fortawesome/free-solid-svg-icons";
import { easeInOut, easeOut, motion } from "framer-motion";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Update the class on the html tag
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Store the dark mode preference in localStorage
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <motion.div className="header w-full flex flex-row  items-center md:p-3 md:pr-10 relative m-0 z-40 shadow-md">
        {/* Toggle button for mobile */}

        <motion.div className="p-1 flex justify-center items-center">
          <button
            className="md:hidden w-10 transition-opacity"
            onClick={toggleMobileMenu}
          >
            <img className="w-10 p-0 " src={menupng} alt="menuicon" />
          </button>
        </motion.div>

        {/* Header links for desktop */}
        <div className={`hidden md:flex space-x-4 w-screen md:w-auto}`}>
          {/* Other menu items */}
          {/* Add onClick handlers to close the mobile menu */}
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="/">Home</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#about">About</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#qualifications">Qualifications</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#skills">Skills</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#projects">Projects</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#publications">Publications</a>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "rgb(203 213 225)", scale: 1.03 }}
            className="p-1 rounded-lg"
          >
            <a href="#certifications">Certifications</a>
          </motion.div>
        </div>

        {/* Dark mode toggle */}
        <motion.div
          className="rounded-xl flex items-center m-auto cursor-pointer max-w-[4.5rem] p-1 right-3 absolute"
          onClick={toggleDarkMode}
          animate={{
            backgroundImage: isDarkMode
              ? "linear-gradient(rgb(79, 70, 229), rgb(129, 140, 248))"
              : "linear-gradient(rgb(59, 130, 246), rgb(125, 211, 252))",
          }}
        >
          <motion.div
            // initial={{
            //   x: isDarkMode ? "90%" : "10%",

            // }}
            animate={{
              x: isDarkMode ? "90%" : "-10%",
              opacity: isDarkMode ? 0 : 100,
            }}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="cursor-pointer outline-none w-10  text-orange-300"
              style={{
                "--fa-primary-color": "#1e1f1f",
                "--fa-secondary-color": "#d0c00b",
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              x: isDarkMode ? "-10%" : "-90%",
              opacity: isDarkMode ? 100 : 0,
            }}
          >
            <FontAwesomeIcon
              icon={faMoon}
              className="cursor-pointer outline-none w-10  text-slate-200"
              style={{
                "--fa-primary-color": "#1e1f1f",
                "--fa-secondary-color": "#d0c00b",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex flex-col space-y-5 space-x-3 z-50 font-medium"
        variants={{
          open: { width: "100vw", height: "100vh", fontSize: "1.2rem" },
          closed: { width: 0, height: 0, fontSize: 0 },
        }}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        exit={{
          width: 0,
          height: 0,
          fontSize: 0,
          transition: {
            type: "spring",
            ease: easeOut,
            duration: 0.2,
          },
        }}
        transition={{ type: "spring", ease: easeInOut, duration: 1 }}
      >
        {/* Other menu items */}
        {/* Add onClick handlers to close the mobile menu */}
        <div onClick={closeMobileMenu} className="px-3">
          <a href="/">Home</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#about">About</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#qualifications">Qualifications</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#skills">Skills</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#projects">Projects</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#publications">Publications</a>
        </div>
        <div onClick={closeMobileMenu}>
          <a href="#certifications">Certifications</a>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
