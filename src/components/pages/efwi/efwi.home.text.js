import React from "react";
import "../../HeroSection.css";
import "../../Content.css";
import vid from "../../../videos/video-3.mp4";
import "katex/dist/katex.min.css"; // import styles
import { InlineMath } from "react-katex";

export default function EfwiText() {
  return (
    <div>
      <div className="hero-container">
        <video controls style={{ transform: "scaleX(-1)" }} autoPlay loop muted>
          <source src={vid} type="video/mp4" />
        </video>
        <h1 style={{ color: "white", fontSize: "80px" }}>
          <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>
        </h1>
        <strong>
          <p style={{ color: "white", fontSize: "30px" }}>
            Benchmark Datasets for Elastic Full Waveform Inversion{" "}
          </p>
        </strong>
      </div>
      <div className="content-container">
        <p className="content-text">
          <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> is a collection of
          benchmark datasets for Elastic Full Waveform Inversion. We release
          eight datasets characterizing different subsurface structures. The
          benchmarks cover results by three deep learning-based methods:
          ElasticNet, ElasticGAN and ElasticTransformer. <br />
          <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> is the first
          open-source platform to facilitate Elastic FWI research. The datasets
          are built upon OpenFWI and inherit the mutli-scale, multi-domain and
          multi-subsurface-complexity properties.
        </p>
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/all_B_models.png`}
          alt="Models"
          className="content-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/elastic_fwi.png`}
          alt="Elastic FWI"
          className="content-image"
        />
      </div>
    </div>
  );
}
