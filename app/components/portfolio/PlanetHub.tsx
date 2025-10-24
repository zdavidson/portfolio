import Button from "@mui/material/Button";
import Image from "next/image";

const PlanetHub = () => {
  return (
    <div id="about" className="about-me">
      <div>
        <div className="mobile">
          <a className="image-link" href="https://planet-hub.vercel.app">
            <Image
              id="planet-hub-image"
              className="about-image"
              src="./images/planet-hub-screenshot-mobile-third.png"
              alt="profile"
            />
          </a>
        </div>
        <div className="text-column">
          <div>
            <div className="line"></div>
          </div>

          <div>
            <h2>PlanetHub</h2>
          </div>
          <div>
            <p className="portfolio-item-description">
              This is a fully responsive info site that I built using React. In
              addition to React, I used React Bootrap for simplified component
              creation, and SCSS for greater code structure.
            </p>
            <br className="desktop"></br>
            <p className="desktop">
              GitHub:{" "}
              <span>
                <a
                  className="github-link"
                  href="https://github.com/zdavidson/planet-hub"
                >
                  https://github.com/zdavidson/planet-hub
                </a>
              </span>
            </p>
          </div>
          <div>
            <Button variant="outlined" href="https://planet-hub.vercel.app">
              View Project
            </Button>
          </div>
          <div>
            <div className="line end"></div>
          </div>
        </div>
        <div className="desktop">
          <a className="image-link" href="https://planet-hub.vercel.app">
            <Image
              id="planet-hub-image"
              className="about-image"
              src="./images/planet-hub-screenshot-mobile-third.png"
              alt="profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanetHub;
