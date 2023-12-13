import React from "react";
import "../../HeroSection.css";
import "../../Content.css";

import "katex/dist/katex.min.css"; // import styles

export default function OpenFWIText() {
  return (
    <div>
      <div className="content-container">
        <div className="content-heading">OpenFWI</div>
        <div className="content-text">
          OpenFWI is a collection of large-scale, multi-structural benchmark
          datasets for machine learning driven seismic FWI. We release twelve
          datasets synthesized from different priors, including one 3D dataset.
          We also provide baseline experimental results with four deep learning
          methods: InversionNet, VelocityGAN, UPFWI and InversionNet3D. OpenFWI
          is the first open-source platform to facilitate data-driven FWI
          research. It will be actively developed and the datasets are expected
          to evolve.
        </div>
        <div className="content-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/gallery.jpg`}
            alt="Models"
            className="content-image"
          />
        </div>
      </div>
    </div>
  );
}
