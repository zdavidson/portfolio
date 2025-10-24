import "./Navigation.scss";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="#home">
        <Image src="./images/logo.svg" alt="site-logo" width={62} height={32} />
      </a>
      <div className="ml-auto">
        <Link className="header-link" href="/">
          Home
        </Link>
        <Link
          className="header-link"
          href="https://www.davidsonprogrammingacademy.com"
        >
          Bootcamp
        </Link>
        <Link
          className="header-link"
          href="https://www.youtube.com/@davidsonprogrammingacademy"
        >
          YouTube
        </Link>
        <Link className="header-link" href="https://github.com/zdavidson">
          GitHub
        </Link>
        <Link className="header-link" href="mailto:zoe.a.h.davidson@gmail.com">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
