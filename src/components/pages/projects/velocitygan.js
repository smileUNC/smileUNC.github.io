import React from "react";
import "../../HeroSection.css";
import "../../Content.css";

import "katex/dist/katex.min.css"; // import styles

export default function VelocityGAN() {
  return (
    <div className="content-container">
      <div className="content-heading">
        VelocityGAN: Subsurface Velocity Image Estimation Using Conditional
        Adversarial Networks
      </div>

      <div className="content-title">Highlight</div>

      <div className="content-text">
        The usual approach to alleviate ill-posedness is to incorporate prior
        knowledge with a regularization term that penalizes solutions that are
        inconsistent with this prior knowledge. Most existing regularization
        techniques employ generic functions (e.g., L1 or L2 penalties on
        coefficients) that are loosely (if at all) related to the physical
        problem at hand. We implement a data-driven inversion method as an
        image-to-image-translation problem using generative adversarial networks
        (GANs) structure, which I call “VelocityGAN”. VelocityGAN learns an
        effective regularization that is customized to the inversion problem. In
        particular, we use GANs to learn a classifier to discriminate between
        the true and the generated velocity maps. The discriminator penalizes
        velocity maps that do not “look like” the maps that are used for
        training. We compare the performance of VelocityGAN with InversionNet
        and notice some improvement. Most importantly, we notice that
        VelocityGAN yields generalization ability to some extent,The full paper
        can be found on arxiv:{" "}
      </div>
      <div className="content-text">
        <a
          href="https://arxiv.org/abs/1809.10262"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data-driven Seismic Waveform Inversion: A Study on the Robustness and
          Generalization
        </a>
      </div>

      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/gan/gan1.png`}
          alt="V-Gan"
          className="content-image"
        />
      </div>

      <div className="content-title">Results</div>
      <div className="content-text">
        Illustration of some examples from SEG/EAEG salt data set. We show six
        inversion results from testing set to demonstrate that our model can
        predict velocity maps with varying salt dome shapes. For each example,
        the ground truth image is shown on the left column and the inverted
        image is shown on the right column. The colormap used ranges from the
        minimum value to maximum value of each pair of velocity maps.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/gan/gan2.png`}
          alt="V-Gan"
          className="content-image"
        />
      </div>
    </div>
  );
}
