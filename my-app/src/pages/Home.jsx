import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    }
    return (
        <>
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </>
    );
};

export default Home;