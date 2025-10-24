import "./ContactMe.scss";
import Button from "@mui/material/Button";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="section-seperator">
        <hr className="line"></hr>
      </div>
      <h2>Interested in doing a project together?</h2>
      <div className="line-contact">
        <hr></hr>
      </div>
      <Button variant="outlined" href="mailto:zoe.a.h.davidson@gmail.com">
        Contact Me
      </Button>
    </div>
  );
};

export default ContactMe;
