import Button from "@mui/material/Button";
import Image from "next/image";

const Audiophile = () => {
  return (
    <div id="about" className="about-me">
      <div>
        <div id="about-image-col" className="">
          <a className="image-link" href="https://audiophile-seven.vercel.app">
            <Image
              id="audiophile-image"
              className="about-image"
              src="./images/audiophile-screenshot-half.png"
              alt="profile"
            />
          </a>
        </div>
        <div className="text-column">
          <div>
            <div className="line"></div>
          </div>

          <div>
            <h2>Audiophile</h2>
          </div>
          <div>
            <p className="portfolio-item-description">
              This is a fully responsive e-commerce site that I built using
              React and Redux. Additionally, I made use of React Bootrap, and
              SCSS for more efficient component creation and cleaner code.
            </p>
            <br className="desktop"></br>
            <p className="desktop">
              GitHub:{" "}
              <span>
                <a
                  className="github-link"
                  href="https://github.com/zdavidson/audiophile"
                >
                  https://github.com/zdavidson/audiophile
                </a>
              </span>
            </p>
          </div>
          <div>
            <Button
              variant="outlined"
              href="https://audiophile-seven.vercel.app"
            >
              View Project
            </Button>
          </div>
          <div>
            <div className="line end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiophile;
