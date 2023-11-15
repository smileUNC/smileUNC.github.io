import React from "react";
import vid from "../videos/video-1.mp4";
import { Button } from "./Button";
import "./HeroSection.css";
import "katex/dist/katex.min.css"; // import styles
// import { InlineMath } from "react-katex";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={vid} autoPlay loop muted />
      <h1 style={{ color: "white", fontSize: "50px" }}>SMILE</h1>
      <p style={{ color: "white", fontSize: "50px" }}>
        <strong> LANL-OpenFWI (brief introduction) </strong>
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="/blog"
        >
          Blog
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={console.log("hey")}
          link="https://groups.google.com/g/openfwi"
          newTab={true}
        >
          Sign up <i className="fa fa-envelope" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
