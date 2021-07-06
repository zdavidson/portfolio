import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <NavBar className="py-4 container align-items-center">
        <NavBar.Brand href="#home">
          <img src="./logo-light.svg" alt="site-logo" />
        </NavBar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="ml-4 footer-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="ml-4 footer-link" href="#portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="ml-4 footer-link" href="#contact">
            Contact Me
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link className="mr-2 footer-link" href="#home">
            <img src="./github.svg" alt="github-icon" />
          </Nav.Link>
          <Nav.Link className="mr-2 footer-link" href="#portfolio">
            <img src="./twitter.svg" alt="twitter-icon" />
          </Nav.Link>
          <Nav.Link className="footer-link" href="#contact">
            <img src="./linkedin.svg" alt="linkedin-icon" />
          </Nav.Link>
        </Nav>
      </NavBar>
    </div>
  );
};

export default Footer;