import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Skills from "../components/skills/Skills";
import Work from "../components/work/Work";
import Resume from "../components/resume/Resume";
import Contact from "../components/contact/Contact";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Work darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Resume darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
};

export default Home;