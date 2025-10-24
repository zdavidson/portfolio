import "./AboutMe.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
              I’m a{" "}
              <strong>Senior Software Engineer and Developer Educator</strong>{" "}
              with a passion for building, teaching, and inspiring through code.
              At <strong>IKEA’s Geomagical Labs</strong>, I’ve led the
              development and launch of cutting-edge mixed-reality design tools
              that reach millions of users worldwide—driving growth,
              accessibility, and performance at scale.
              <br></br>
              With expertise in{" "}
              <strong>
                React, Next.js, TypeScript, GraphQL, Redux, and Relay
              </strong>
              , I create fast, maintainable, and visually engaging web
              experiences. I also work across the stack with{" "}
              <strong>Node.js, Supabase, and PostgreSQL</strong>
              to deliver complete, production-ready solutions.
              <br></br>
              Beyond engineering, I’m deeply committed to{" "}
              <strong>developer education</strong>. Through my
              <a
                className="no-style"
                href="https://www.youtube.com/@davidsonprogrammingacademy"
                target="_blank"
                rel="noreferrer"
              >
                YouTube channel
              </a>
              and online bootcamp, I’ve mentored thousands of aspiring
              engineers—breaking down complex frontend concepts into clear,
              visual lessons that make learning to code more accessible and
              creative.
              <br></br>
              I’m currently based in Washington, DC. When I’m not coding or
              teaching, you’ll probably find me behind a camera or exploring a
              new city.
              <br></br>
              <a
                className="no-style"
                href="https://www.davidsonprogrammingacademy.com"
                target="_blank"
                rel="noreferrer"
              >
                → Explore the bootcamp
              </a>
              <a
                className="no-style"
                href="https://www.youtube.com/@davidsonprogrammingacademy"
                target="_blank"
                rel="noreferrer"
              >
                → Watch my tutorials on YouTube
              </a>
              <a
                className="no-style"
                href="https://github.com/zdavidson"
                target="_blank"
                rel="noreferrer"
              >
                → View my projects on GitHub
              </a>
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
