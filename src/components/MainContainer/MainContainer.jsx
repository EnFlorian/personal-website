import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";

import "./MainContainer.scss";

const MainContainer = () => {
  return (
    <div className="main">
      <AboutSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default MainContainer;
