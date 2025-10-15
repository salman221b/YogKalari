import React from "react";
import Hero from "./Hero";
import About from "./About";
import Offerings from "./Offerings";
import Trainer from "./Trainer";
import WhispersWellnessPage from "./WhispersWellnessPage";
import MarqueeBanner from "./MarqueeBanner";
import ScrollToTop from "../../components/ScrollToTop";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Offerings />
      <Trainer />
      <WhispersWellnessPage />
      <MarqueeBanner />
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
