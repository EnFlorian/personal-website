import React from "react";
import { Footer, HeroSection, MainContainer, Navbar } from "../components";
import NotificationModal from "../components/NotificationModal/NotificationModal";
import { useAppContext } from "../state/context";
import "./Home.scss";

const Home = () => {
  const { isNotificationModalOpen } = useAppContext();
  return (
    <div className="home">
      <Navbar />
      <HeroSection />
      <MainContainer />
      <Footer />
      {isNotificationModalOpen && <NotificationModal />}
    </div>
  );
};

export default Home;
