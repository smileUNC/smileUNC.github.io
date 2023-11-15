import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf9DzgCvgsIrSvSB8_koDwB5YO_FA7ULf6xsTJRLEDoMuDalw/viewform?embedded=true"
        width="1500"
        height="993"
        title="Contact Me Form" // Adding a title for accessibility reasons
      >
        Loading…
      </iframe>
    </div>
  );
};

export default ContactMe;
