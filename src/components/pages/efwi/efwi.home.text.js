import React from "react";
import "../../HeroSection.css";
import "../../Content.css";

import "katex/dist/katex.min.css"; // import styles
import { InlineMath } from "react-katex";

export default function EfwiText() {
  return (
    <div className="content-container">
      <div className="content-heading">
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>
      </div>
      <div className="content-title">Overview</div>
      <div className="content-text">
        Elastic geophysical properties (such as P- and S-wave velocities) are of
        great importance to various subsurface applications like CO<sub>2</sub>
        &nbsp; sequestration and energy exploration (e.g., hydrogen and
        geothermal). Elastic full waveform inversion (FWI) is widely applied for
        characterizing reservoir properties. In this paper, we introduce{" "}
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> , a comprehensive
        benchmark dataset that is specifically designed for elastic FWI.
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>encompasses 8 distinct
        datasets that cover diverse subsurface geologic structures (flat, curve,
        faults, etc). The benchmark results produced by three different deep
        learning methods are provided.
      </div>
      <div className="content-text">
        The full paper can be found on arxiv:
        <div>
          <a href="https://arxiv.org/abs/2306.12386">
            <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>: Multi-parameter
            Benchmark Datasets for Elastic Full Waveform Inversion of
            Geophysical Properties
          </a>
        </div>
      </div>

      <div className="content-title">Highlight</div>

      <div className="content-text">
        Here, we present <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>, which
        stands as the pioneering large-scale compilation of an open-access
        elastic seismic full-waveform dataset. Examples of Poisson's ratio maps,
        P- and S-wave velocity maps are shown in Figure 1.{" "}
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>&nbsp;is constructed upon
        our previously published open-access acoustic seismic dataset, known as
        OpenFWI. Our approach incorporates the advantageous characteristics
        of&nbsp;
        <strong>
          multi-scale, multi-domain, and multi-subsurface-complexity,
        </strong>{" "}
        inherited from the OpenFWI framework. Furthermore,{" "}
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>&nbsp;entails the creation
        of S-wave velocity maps and employs the elastic wave equation in the
        forward modeling phase. The computational demands associated with
        conducting elastic forward modeling are substantial. Consequently, the
        availability of this dataset would significantly alleviate the burden on
        researchers.{" "}
      </div>
      <div className="content-text">
        <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>&nbsp;facilitates
        equitable comparisons across various methodologies using multiple
        datasets. In this study, we evaluate the effectiveness of three
        prominent methodologies derived from pre-existing networks, namely
        InversionNet, VelocityGAN, and SimFWI. The objective of this evaluation
        is to establish a benchmark for future investigations. For comprehensive
        replication attempts, including the GitHub repository, pre-trained
        models, and associated licenses, we direct readers to the resources
        referenced in Section 1 of supplementary materials.
      </div>

      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/all_B_models.png`}
          alt="Models"
          className="content-image"
        />
      </div>
      <div className="content-text">
        Figure 1. Gallery of <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>
        &nbsp;: one example of reservoir structure (P<sub>r</sub>) and velocity
        maps (V<sub>p</sub>, V<sub>s</sub>) from the{" "}
        <InlineMath>{"\\mathbb{E}^{FVB}"}</InlineMath>,{" "}
        <InlineMath>{"\\mathbb{E}^{FFB}"}</InlineMath>,{" "}
        <InlineMath>{"\\mathbb{E}^{CVB}"}</InlineMath>,{" "}
        <InlineMath>{"\\mathbb{E}^{CFB}"}</InlineMath>datasets. P<sub>r</sub>
        &nbsp;refers to the designed reservoir, which is the Poisson's ratio
        anomaly calculated explicitly by V<sub>p</sub>&nbsp;and V<sub>s</sub> .
      </div>
      <div className="content-title">Why elastic FWI?</div>
      <div className="content-text">
        Elastic inversion, as shown in Figure 2, which considers both P- and
        shear (S-) waves, provides a more comprehensive and precise
        representation of the subsurface. The correlation between the P- (V
        <sub>p</sub>) and S-wave velocities (V<sub>s</sub>) holds significant
        implications in the determination of Poisson's ratio (i.e., V
        <sub>p</sub>- V<sub>s</sub>ratio) and Young's modulus. These parameters
        play a vital role in the reservoir characterization and serve as
        essential indicators in the identification and assessment of hydrogen
        and geothermal reservoirs. The following aspects highlight their
        significance:
        <div>
          <ul>
            <li>
              Lithology discrimination: Combination of <strong>P-wave</strong>{" "}
              and <strong>S-wave</strong> velocities is useful for the lithology
              estimation, while <strong>P-wave</strong> alone introduces
              significant ambiguity because of the overlap of{" "}
              <strong>P-wave</strong> for different types of rocks.
            </li>
            <li>
              Fracture characterization: Using the Poisson's ratio (
              <strong>σ</strong> ratio) and S-wave splitting can estimate
              fracture orientation and facilitate hydraulic fracturing
              stimulation.
            </li>
            <li>
              Estimation of fluid content and saturation: Poisson's ratio (
              <strong>σ</strong> ratio) allows us to estimate the
              compressibility and estimate the fluid property qualitatively with
              other relevant reservoir parameters such as the pressure and
              temperature.
            </li>
          </ul>
        </div>
        Figure 2. Schematic depiction of the data-driven approach for elastic
        forward modeling and FWI. The forward modeling process involves
        utilizing elastic forward modeling to compute seismic data by employing
        the governing elastic wave equations, while elastic FWI employs neural
        networks to infer the P- and S-wave velocity maps from seismic data
        containing vertical and horizontal components.
      </div>
      <div className="content-image">
        <img
          src={`${process.env.PUBLIC_URL}/images/elastic_fwi.png`}
          alt="Elastic FWI"
          className="content-image"
        />
      </div>
    </div>
  );
}
