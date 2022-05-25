import React from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import PortfolioSection from "./PortfolioSection";
import "./MainContainer.scss";

const MainContainer = () => {
  return (
    <div className="main-container">
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default MainContainer;
