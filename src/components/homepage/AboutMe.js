import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col id="about-image-col" className="">
          <img className="about-image" src="./profile.jpg" alt="profile" />
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>About Me</h2>
          </Row>
          <Row>
            <p>
              I’m a software engineer looking for a position at a company that
              is looking to make a positive difference in the world. I focus on
              writing accessible HTML, using modern CSS practices and writing
              clean TypeScript of JavaScript. When it comes to front end
              technologies, I'm well versed in React, Next.js, GraphQL, Material
              UI, Redux, and Relay, but I can adapt to whatever tools are
              required. As far as the back end goes, I have experience with
              Node.js, Express, Supabase, and PostgreSQL. I’m currently based in
              Washington, DC, but I’m happiest working remotely and have
              experience being on remote teams. When I’m not coding, you’ll find
              me taking photos and traveling. I love art in all its forms, but
              particularly in pictures or on film. I’d love for you to check out
              my work{" "}
              <a className="no-style" href="/portfolio">
                here
              </a>
              , or on{" "}
              <a className="no-style" href="https://github.com/zdavidson">
                {" "}
                GitHub{" "}
              </a>
              .
            </p>
          </Row>
          <Row>
            <Button
              variant="outline-secondary"
              href="https://github.com/zdavidson"
            >
              Go To Portfolio
            </Button>
          </Row>
          <Row>
            <div className="line end"></div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
