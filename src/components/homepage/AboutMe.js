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
              I’m a senior software engineer with a background in education and a proven track record of delivering impactful digital products at scale. 
              At IKEA’s Geomagical Labs, I’ve led the launch of cutting-edge, mixed-reality design tools that reach millions of users worldwide—resulting 
              in thousands of new users annually. I've built performant, accessible, and maintainable front-end experiences using modern tools like React, 
              Next.js, GraphQL, Redux, Relay, and TypeScript, and I’ve contributed across the stack with Node.js, Supabase, and PostgreSQL.
              <br></br>
              I'm especially passionate about crafting clean, accessible interfaces with modern CSS and scalable component systems. I’ve also created an 
              online bootcamp and YouTube channel to mentor and support aspiring front-end developers.
              <br></br>
              I’m currently based in Washington, DC. When I’m not coding, I’m usually behind a camera or exploring a new city.
              <br></br>
              <a className="no-style" href="https://www.davidsonprogrammingacademy.com"> → Check out the bootcamp</a>
              <a className="no-style" href="https://github.com/zdavidson"> → View my projects on GitHub </a>
            </p>
          </Row>
          // <Row>
          //   <Button
          //     variant="outline-secondary"
          //     href="https://github.com/zdavidson"
          //   >
          //     Go To Portfolio
          //   </Button>
          // </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
