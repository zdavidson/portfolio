import Button from "@mui/material/Button";
import Image from "next/image";

const Feedback = () => {
  return (
    <div id="about" className="about-me">
      <div>
        <div className="mobile">
          <a className="image-link" href="https://feedback-liart.vercel.app/">
            <Image
              id="feedback-image"
              className="about-image"
              src="./images/feedback-screenshot-slim.png"
              alt="profile"
            />
          </a>
        </div>
        <div className="text-column">
          <div>
            <div className="line"></div>
          </div>

          <div>
            <h2>Feedback</h2>
          </div>
          <div>
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
          </div>
          <div>
            <Button
              variant="outlined"
              href="https://feedback-liart.vercel.app/"
            >
              View Project
            </Button>
          </div>
          <div>
            <div className="line end"></div>
          </div>
        </div>
        <div className="desktop">
          <a className="image-link" href="https://feedback-liart.vercel.app/">
            <Image
              id="planet-hub-image"
              className="about-image"
              src="./images/feedback-screenshot-slim.png"
              alt="profile"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
