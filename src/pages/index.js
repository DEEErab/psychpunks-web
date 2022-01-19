import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import About from "../components/About";
import Roadmap from "../components/Roadmap";
import DAO from "../components/DAO";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Roadmap />
      <DAO />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
