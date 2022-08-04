import "./Hero.scss";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h1>
          Hey, I'm{" "}
          <a id="name" href="#about">
            Zoë Davidson
          </a>{" "}
          and I love building beautiful websites
        </h1>
        <Button id="about-me-button" variant="success" href="#about">
          About Me
        </Button>
      </div>
      <div className="section-seperator">
        <hr className="line"></hr>
      </div>
    </div>
  );
};

export default Hero;
