import React from "react";
import "../../HeroSection.css";
import "../../Content.css";
import vid from "../../../videos/video-3.mp4";
import "katex/dist/katex.min.css"; // import styles

export default function OpenFWIText() {
  return (
    <div>
      <div className="hero-container">
        <video controls style={{ transform: "scaleX(-1)" }} autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
        <h1 style={{ color: "white", fontSize: "80px" }}>OpenFWI</h1>
        <strong>
          <p style={{ color: "white", fontSize: "25px" }}>
            Datasets and Benchmarks for Seismic FWI with Deep Learning
          </p>
        </strong>
      </div>
      <div className="content-container">
        <p className="content-text">
          OpenFWI is a collection of large-scale, multi-structural benchmark
          datasets for machine learning driven seismic FWI. We release twelve
          datasets synthesized from different priors, including one 3D dataset.
          We also provide baseline experimental results with four deep learning
          methods: InversionNet, VelocityGAN, UPFWI and InversionNet3D. OpenFWI
          is the first open-source platform to facilitate data-driven FWI
          research. It will be actively developed and the datasets are expected
          to evolve.
        </p>
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/gallery.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
