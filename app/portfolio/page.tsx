import "./PortfolioIndex.scss";
import ContactMe from "../components/homepage/ContactMe";
import Audiophile from "../components/portfolio/Audiophile";
import PlanetHub from "../components/portfolio/PlanetHub";
import Feedback from "../components/portfolio/Feedback";

const PortfolioIndex = () => {
  return (
    <div id="portfolio-index">
      <Feedback />
      <Audiophile />
      <PlanetHub />
      <ContactMe />
    </div>
  );
};

export default PortfolioIndex;
