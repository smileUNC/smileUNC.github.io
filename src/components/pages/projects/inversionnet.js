import React from "react";
import "../../HeroSection.css";
import "../../Content.css";

export default function InversionNet() {
  return (
    <div className="content-container">
      <div className="content-heading">
        InversionNet: An Efficient and Accurate Data-driven Full Waveform
        Inversion
      </div>

      <div className="content-title">Highlight</div>

      <div className="content-text">
        Full-waveform inversion problems are usually formulated as optimization
        problems, where the forward-wave propagation operator f maps the
        subsurface velocity structures to seismic signals. The existing
        computational methods for solving full-waveform inversion are not only
        computationally expensive, but also yields low-resolution results
        because of the ill-posedness and cycle skipping issues of full-waveform
        inversion. To resolve those issues, we employ machine-learning
        techniques to solve the full-waveform inversion. Specifically, we focus
        on applying convolutional neural network (CNN) to directly derive the
        inversion operator so that the velocity structure can be obtained
        without knowing the forward operator f. We build a convolutional neural
        network with an encoder-decoder structure to model the correspondence
        from seismic data to subsurface velocity structures. Furthermore, we
        employ the conditional random field (CRF) on top of the CNN to generate
        structural predictions by modeling the interactions between different
        locations on the velocity model. The full paper can be found on arxiv:{" "}
      </div>
      <div className="content-text">
        <a
          href="https://arxiv.org/abs/1811.07875"
          target="_blank"
          rel="noopener noreferrer"
        >
          InversionNet: A Real-Time and Accurate Full Waveform Inversion with
          CNNs and continuous CRFs
        </a>
      </div>
      <div className="content-title">What is Full Waveform Inversion?</div>

      <div className="content-text">
        Seismic waves are mechanical perturbations that travel in the medium at
        a speed governed by the acoustic/elastic impedance of the medium in
        which they are traveling. Full waveform inversion (FWI) is non-linear
        data-fitting procedure that aims at obtaining detailed estimates of
        subsurface properties from seismic data, which can be the result of
        either passive or active seismic experiments.
      </div>
      <div className="content-title">Why is it hard to solve FWI?</div>

      <div className="content-text">
        The major challenges of solving FWI mostly come from three folds:
        ill-posedness, cycle skipping, and high computational cost. Similar to
        other geophysical exploration methods, FWI suffers from the limited data
        coverage, which results in extremely under-constrained inverse problems.
        Due to the fact that FWI is highly non-linear and sensitive to the
        initial guess, a naive approach to the FWI problem typically converges
        to a local minima. When the starting model is far away from the global
        minimum (common in field applications), a deterministic algorithm is
        unable to move the events in seismic data to the correct cycle. The miss
        match to correct wavefield phase is also called cycle skipping. Having
        low-frequency components in inversion is critical to alleviate this
        cycle skipping issue. High computational cost is another challenging for
        solving FWI problems. Most of the existing approaches to solve FWI rely
        on iterative nonlinear optimization techniques. At each iteration, it is
        cubic cost to obtain the gradient, provided with a 2-D subsurface model.
      </div>
      <div className="content-title">Data-driven FWI Solver</div>

      <div className="content-text">
        We feed a large amount of seismic data into the machine and train them
        to predict the corresponding velocity models. When the size of the
        training data set is sufficiently large, the mapping from the seismic
        data to the velocity model can be correctly learned. Once the training
        phase is completed, the machine can predict thevelocity model from new
        seismic data.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/inversion/inv_net1.png`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-title">
        InversionNet: Image Translation using Encoder-Decoder Structure with CRF
      </div>

      <div className="content-text">
        Our InversionNet has an encoder-decoder architecture. The encoder (the
        top pipeline) is primarily built with convolution layers, which extract
        high-level features from the input seismic data and compress them into a
        single high-dimensional vector. The decoder (the bottom pipeline) then
        translates those features into velocity models through a set of
        deconvolution layers. The specification of each layer is provided in the
        figure.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/inversion/inver.png`}
          alt="Models"
          className="content-image"
        />
      </div>

      <div className="content-title">Results</div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/inversion/inv_net2.png`}
          alt="Models"
          className="content-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/inversion/inv_net3.png`}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
