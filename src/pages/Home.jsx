import React from "react";
import HeroSection from "../components/HeroSection";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <MainContainer />
    </div>
  );
};

export default Home;
