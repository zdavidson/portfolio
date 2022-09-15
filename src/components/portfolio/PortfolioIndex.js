import "./PortfolioIndex.scss";
import ContactMe from "../homepage/ContactMe";
import Audiophile from "./Audiophile";
import PlanetHub from "./PlanetHub";
import Feedback from "./Feedback";

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
