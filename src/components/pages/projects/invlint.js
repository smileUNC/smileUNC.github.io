import React from "react";
import "../../Content.css";

export default function Invlint() {
  return (
    <div className="content-container">
      <div className="content-heading-2">
        An Intriguing Property of Geophysics Inversion
      </div>

      <div className="content-title">Highlight</div>
      <div className="content-text">
        This paper presents a novel lightweight approach to geophysical
        inversion problems, which are typically challenging due to their
        ill-posed nature and high computational demands. This is underpinned by
        our discovery of a near-linear relationship between surface-based
        geophysical measurements and subsurface physical properties in a
        high-dimensional space, after applying specific integral transforms.
        Specifically, in seismic data inversion to subsurface velocity governed
        by wave equations, we found that the integral results of velocity using
        Gaussian kernels have a linear correlation with the integral of seismic
        data using sine kernels. We leverage this relationship to design a
        lightweight encoder-decoder network for inversion, where the encoder
        contains the integration of seismic data and the linear transformation
        without the need for fine-tuning. The decoder only consists of a single
        transformer block to reverse the integral of velocity. Our experiments
        across four different datasets for two geophysical inversion problems
        show that this method not only holds this interesting property but also
        achieves comparable accuracy to the much deeper end-to-end network,
        InversionNet, with significantly fewer parameters, marking a substantial
        advancement in the field of geophysical inversion techniques.
      </div>
      <div className="content-text">
        The full paper can be found on:
        <div>
          <a
            href="https://proceedings.mlr.press/v162/feng22a/feng22a.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            An Intriguing Property of Geophysics Inversion
          </a>
        </div>
      </div>
      <div className="content-title">Foundation</div>
      <div className="content-text">
        We found an intriguing property of geophysics inversion that geophysical
        measurements and geophysical property have a{" "}
        <strong>near-linear</strong> relationship in high dimensional space
        after <strong>integral transforms</strong>. In particular, we use the
        sine kernel as the kernel Phi to integral with the measurements and get
        the high dimension vector U and use Gaussian kernels as the kernel Psi
        to integral with the properties to get the high-dimension vector Y.
        After that, these two high-dimensional embeddings will have a
        near-linear relationship.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/invlint/teaser_s.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>

      <div className="content-title">Methodology</div>
      <div className="content-text">
        The proposed mathematical property can be very easily implemented to
        significantly simplify the network with encoder-decoder architecture. In
        particular, the encoder only contains the integral transformation
        followed by a linear layer. While the decoder just uses a single
        transformer block followed by a linear projection to reverse the
        integral of Gaussian kernels. This results in a much shallower network.
        In addition, the encoder and decoder are learned separately. The encoder
        is just a regression problem and can be directly solved, for example by
        the method of least squares. And it will be frozen afterward. Only the
        transformer block and the following linear layer in the decoder are
        learned via an SGD-based optimizer.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/invlint/workflow_s.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-title">Results</div>
      <div className="content-text">
        We verify our method on four datasets, of which the first three of them
        are used for the seismic inversion, and the last one of which is for the
        EM inversion. Compared to much deeper InversionNet and VelocityGAN, our
        method achieves comparable or even better accuracy but consumes
        significantly fewer parameters and FLOPs.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/invlint/result1.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/invlint/result2.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
