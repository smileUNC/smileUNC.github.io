import React from "react";
import "./contact.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf9DzgCvgsIrSvSB8_koDwB5YO_FA7ULf6xsTJRLEDoMuDalw/viewform?embedded=true"
        width="100%"
        height="100%"
        title="Contact Me Form" // Adding a title for accessibility reasons
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactMe;
