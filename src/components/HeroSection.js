import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "katex/dist/katex.min.css"; // import styles
// import { InlineMath } from "react-katex";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="hero-image"
        src={`${process.env.PUBLIC_URL}/images/smile.jpg`}
        alt="SMILE"
      ></img>
      <div className="hero-text">
        <span className="highlighted">Lab Vision</span>: Our lab tackles
        critical issues in Energy, Geoscience, Medicine, and Biology, using
        advanced data analytics and physics to develop innovative solutions for
        sustainability and health. We strive for breakthroughs that offer
        practical applications and enhance scientific understanding through
        collaboration and public engagement.
      </div>
      <div className="hero-text">
        <span className="highlighted">Research Statement</span>: SMILE Lab is
        committed to advancing scientific research by synergizing artificial
        intelligence with physics principles. Our work spans the innovation of
        clean energy solutions through state-of-the-art subsurface imaging to
        the pioneering early detection of breast cancer via advanced medical
        imaging techniques. Our focus is on honing machine learning methods that
        are anchored in physical laws, aiming for effective solutions to
        real-world issues. Our efforts extend to refining computational
        approaches for predictive analytics and advancing techniques in
        optimization, as well as in multi-physics, multi-fidelity, and
        multi-scale analysis for responsive and real-time decision-making.
        Dedicated to the progress of scientific machine learning (SciML) and the
        integration of AI into the process of scientific discovery (AI4Science),
        we aspire to drive theoretical and computational progress, resulting in
        practical, impactful applications.
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="/blog"
        >
          Blog
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
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
