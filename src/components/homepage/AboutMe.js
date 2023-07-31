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
            <h2>About Me</h2>
          </Row>
          <Row>
            <p>
              I’m an experienced software engineer and former university professor who focuses on maintaining
              accessible HTML, using modern CSS practices and writing clean
              TypeScript and JavaScript. When it comes to front end
              technologies, I'm well versed in React, Next.js, GraphQL, Material
              UI, Redux, and Relay, but I can adapt to whatever tools are
              required. As far as the back end goes, I have experience with
              Node.js, Express, Supabase, and PostgreSQL. I’m currently based in
              Washington, DC. When I’m not coding, you’ll find me taking photos
              and traveling.
              <br></br>
              <br></br>
              Recently, I created an <a className="no-style" href="https://davidsonprogramming.com/academy">online bootcamp</a> to teach aspiring Front-End developers how to get started. Click <a className="no-style" href="https://davidsonprogramming.com/academy">here</a> to check that out.
              <br></br>
              <br></br>
               I’d also love for you to check out my work{" "}
              {/* <a className="no-style" href="/portfolio">
                here
              </a>
              , or on{" "} */}
              <a className="no-style" href="https://github.com/zdavidson">
                {" "}
                on GitHub
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
          {/* <Row>
            <div className="line end"></div>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
