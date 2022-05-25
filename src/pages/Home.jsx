import React from "react";
import HeroSection from "../components/HeroSection";
import MainContainer from "../components/MainContainer";
import Navbar from "../components/Navbar";
import "./Home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <MainContainer />
    </React.Fragment>
  );
};

export default Home;
