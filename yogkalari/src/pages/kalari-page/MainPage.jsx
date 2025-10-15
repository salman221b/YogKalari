import React from "react";
import Hero from "./Hero";
import About from "./About";
import Offerings from "./Offerings";
import Trainer from "./Trainer";
import BenefitsSection from "./BenefitsSection";
import MarqueeBanner from "./MarqueeBanner";
import ScrollToTop from "../../components/ScrollToTop";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Offerings />
      <Trainer />
      <BenefitsSection />
      <MarqueeBanner />
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
