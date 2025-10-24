import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div id="footer-nav" className="">
          <a href="#home">
            <Image
              className="footer-link"
              src="./images/logo-light.svg"
              alt="site-logo"
              width={62}
              height={32}
            />
          </a>
          <div className="footer-link-container">
            <Link className="footer-link" href="#home">
              Home
            </Link>
            <Link
              className="footer-link"
              href="https://www.davidsonprogrammingacademy.com"
            >
              Bootcamp
            </Link>
            <Link
              className="footer-link"
              href="mailto:zoe.a.h.davidson@gmail.com"
            >
              Contact Me
            </Link>
          </div>

          <div className="footer-icons-container">
            <Link
              className="footer-link footer-icons"
              href="https://www.youtube.com/@davidsonprogrammingacademy"
            >
              <Image
                src="/images/youtube-app-white-icon.webp"
                alt="youtube-icon"
                width={24}
                height={24}
              />
            </Link>
            <Link
              className="footer-link footer-icons"
              href="https://github.com/zdavidson"
            >
              <Image
                src="./images/github.svg"
                alt="github-icon"
                width={24}
                height={24}
              />
            </Link>
            {/* <Link className="mr-2 footer-link" href="#portfolio">
            <img src="./twitter.svg" alt="twitter-icon" />
          </Link> --- maybe Vimeo?*/}
            <Link
              className="footer-link"
              href="https://www.linkedin.com/in/zo%C3%ABdavidson/"
            >
              <Image
                src="./images/linkedin.svg"
                alt="linkedin-icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
