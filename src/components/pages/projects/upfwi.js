import React from "react";
import "../../Content.css";

export default function Upfwi() {
  return (
    <div className="content-container">
      <div className="content-heading-2">
        Unsupervised Learning of Full-Waveform Inversion: Connecting CNN and
        Partial Differential Equation in a Loop
      </div>

      <div className="content-title">Highlight</div>
      <div className="content-text">
        Most of the existing data-driven methods for solving full-waveform
        inversion (FWI) train convolutional neural networks (CNN) in a
        supervised learning manner, where ground truth velocity maps are
        involved. However, the acquisition of velocity maps in real-world
        scenarios is extremely expensive, thus making those methods impractical
        to scale up. To address this problem, we propose an unsupervised
        learning method, namely UPFWI, which integrates the governing partial
        differential equation (PDE) of FWI and CNN in a loop and requires only
        seismic data during training. Specifically, we use finite difference to
        approximate the forward modeling of PDE as a differentiable operator
        (from velocity map to seismic data) and model its inversion by CNN (from
        seismic data to velocity map). Hence, we transform the supervised
        inversion task into an unsupervised seismic data reconstruction task. We
        also introduce a new large-scale dataset OpenFWI, to establish a more
        challenging benchmark for the community. Experiment results show that
        our model (using seismic data alone) yields comparable accuracy to the
        supervised counterpart (using both seismic data and velocity map).
        Furthermore, it outperforms the supervised model when involving more
        seismic data.
      </div>
      <div className="content-text">
        The full paper can be found on arxiv:
        <div>
          <a href="https://arxiv.org/abs/2110.07584">
            Unsupervised Learning of Full-Waveform Inversion: Connecting CNN and
            Partial Differential Equation in a Loop
          </a>
        </div>
      </div>
      <div className="content-title">
        UPFWI: Connecting CNN and Forward Modeling
      </div>
      <div className="content-text">
        As depicted in the following figure, our UPFWI connects a CNN and a
        differentiable forward operator to form a loop. In particular, the CNN
        takes seismic measurements as input and generates the corresponding
        velocity map. We then apply forward acoustic-wave operator on the
        estimated velocity map to reconstruct the seismic data. Typically, the
        forward modeling employs finite difference (FD) to discretize the wave
        equation. The loop is closed by the reconstruction loss between input
        seismic data and reconstructed seismic data. Notice that the ground
        truth of the velocity map is not involved, and the training process is
        unsupervised. Since the forward operator is differentiable, the
        reconstruction loss can be backpropagated (via gradient descent) to
        update the parameters in the CNN.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/upfwi/framework.png`}
          alt="Models"
          className="content-image"
        />
      </div>

      <div className="content-title">Results</div>
      <div className="content-text">
        We show the comparison of inverted velocity maps between different
        methods on FlatFault (top) and CurvedFault (bottom). For FlatFault, our
        UPFWI-48K reveals more accurate details at layer boundaries and the
        slope of the fault in deep region. For CurvedFault, our UPFWI
        reconstructs the geological anomalies on the surface that best match the
        ground truth.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/upfwi/flat_curve_selected.jpg`}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
