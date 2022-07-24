import React from "react";
import { Footer, HeroSection, MainContainer, Navbar } from "../components";
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
