import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Feedback = () => {
  return (
    <div id="about" className="about-me">
      <Row>
        <Col className="mobile">
          <a className="image-link" href="https://feedback-liart.vercel.app/">
            <img
              id="feedback-image"
              className="about-image"
              src="./feedback-screenshot-slim.png"
              alt="profile"
            />
          </a>
        </Col>
        <Col className="text-column">
          <Row>
            <div className="line"></div>
          </Row>

          <Row>
            <h2>Feedback</h2>
          </Row>
          <Row>
            <p className="portfolio-item-description">
              This is a fully responsive info site that I built using Next.js
              and TypeScript. In addition to React, I used Material UI for
              simplified component creation, Supabase to host the backend, and
              React Query to access the data.
            </p>
            <br className="desktop"></br>
            <p className="desktop">
              GitHub:{" "}
              <span>
                <a
                  className="github-link"
                  href="https://github.com/zdavidson/feedback"
                >
                  https://github.com/zdavidson/feedback
                </a>
              </span>
            </p>
          </Row>
          <Row>
            <Button
              variant="outline-secondary"
              href="https://feedback-liart.vercel.app/"
            >
              View Project
            </Button>
          </Row>
          <Row>
            <div className="line end"></div>
          </Row>
        </Col>
        <Col className="desktop">
          <a className="image-link" href="https://feedback-liart.vercel.app/">
            <img
              id="planet-hub-image"
              className="about-image"
              src="./feedback-screenshot-slim.png"
              alt="profile"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Feedback;
