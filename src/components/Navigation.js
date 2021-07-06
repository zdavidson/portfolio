import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <NavBar className="py-4">
      <NavBar.Brand href="#home">
        <img src="./logo.svg" alt="site-logo" />
      </NavBar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="mr-4 header-link" href="#home">
          Home
        </Nav.Link>
        <Nav.Link
          className="mr-4 header-link"
          href="https://github.com/zdavidson"
        >
          Portfolio
        </Nav.Link>
        <Nav.Link
          className="header-link"
          href="mailto:zoe.a.h.davidson@gmail.com"
        >
          Contact Me
        </Nav.Link>
      </Nav>
    </NavBar>
  );
};

export default Navigation;
