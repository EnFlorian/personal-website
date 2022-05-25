import React from "react";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Home;
