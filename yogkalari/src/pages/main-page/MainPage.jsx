import Hero from "./Hero";
import StoryCarousel from "./StoryCarrousel";
import Cards from "./Cards";
import FounderSection from "./FounderSection";
import Marquee from "./Marquee";
import WhispersWellnessPage from "./WhispersWellnessPage";
import ScrollToTop from "../../components/ScrollToTop";

const MainPage = () => {


  return (
    <div>
      <Hero />
      <StoryCarousel />
      <Cards />
      <FounderSection />
      <Marquee />
      <WhispersWellnessPage />
      <ScrollToTop />
    </div>
  );
};

export default MainPage;
