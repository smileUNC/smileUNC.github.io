import React from "react";
import PaperItem from "./paperItem";
import "../Content.css";
import { InlineMath } from "react-katex";

export default function Publications() {
  const papers_openfwi = [
    {
      title:
        "OpenFWI: Large-scale Multi-structural Benchmark Datasets for Full Waveform Inversion",
      link: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/27d3ef263c7cb8d542c4f9815a49b69b-Abstract-Datasets_and_Benchmarks.html",
      authors:
        "Chengyuan Deng, Shihang Feng, Hanchen Wang, Xitong Zhang, Peng Jin, Yinan Feng, Qili Zeng, Yinpeng Chen, Youzuo Lin",
    },
    {
      title:
        "InversionNet: An Efficient and Accurate Data-Driven Full Waveform Inversion",
      link: "https://ieeexplore.ieee.org/document/8918045",
      authors: "Yue Wu, Youzuo Lin",
    },
    {
      title:
        "InversionNet3D: Efficient and Scalable Learning for 3D Full Waveform Inversion",
      link: "https://ieeexplore.ieee.org/document/9648315",
      authors: "Qili Zeng, Shihang Feng, Brendt Wohlberg, Youzuo Lin",
    },
    {
      title:
        "Multiscale Data-driven Seismic Full-waveform Inversion with Field Data Study",
      link: "https://ieeexplore.ieee.org/document/9556631",
      authors: "Shihang Feng, Youzuo Lin, Brendt Wohlberg",
    },
    {
      title:
        "Unsupervised Learning of Full-Waveform Inversion: Connecting CNN and Partial Differential Equation in a Loop",
      link: "https://openreview.net/forum?id=izvwgBic9q",
      authors:
        "Peng Jin, Xitong Zhang, Yinpeng Chen, Sharon Xiaolei Huang, Zicheng Liu, Youzuo Lin",
    },
    {
      title: "An Intriguing Property of Geophysics Inversion",
      link: "https://proceedings.mlr.press/v162/feng22a.html",
      authors:
        "Yinan Feng, Yinpeng Chen, Shihang Feng, Peng Jin, Zicheng Liu, Youzuo Lin",
    },
    {
      title:
        "Physics-Guided Data-Driven Seismic Inversion: Recent Progress and Future Opportunities in Full Waveform Inversion",
      link: "https://www.essoar.org/doi/abs/10.1002/essoar.10511175.2",
      authors: "Youzuo Lin, James Theiler, Brendt Wohlberg",
    },
    {
      title:
        "Physics-Consistent Data-Driven Waveform Inversion With Adaptive Data Augmentation",
      link: "https://ieeexplore.ieee.org/document/9199263",
      authors:
        "Renán Rojas-Gómez, Jihyun Yang, Youzuo Lin, James Theiler, Brendt Wohlberg",
    },
    {
      title:
        "Simplifying Full Waveform Inversion via Domain-Independent Self-Supervised Learning",
      link: "https://arxiv.org/abs/2305.13314",
      authors:
        "Yinan Feng, Yinpeng Chen, Peng Jin, Shihang Feng, Zicheng Liu and Youzuo Lin",
    },
  ];
  const papers_efwi = [];

  return (
    <div>
      <div className="content-container2">
        <div className="content-heading">Papers for OpenFWI Datasets</div>
        <div className="content-note">
          Note: The datasets used in previous papers may be different, we unify
          the parameters (data shape, forward modelling, training, etc.) of
          official OpenFWI datasets.
        </div>
        <div className="content-text">
          <ul>
            {papers_openfwi.map((paper) => (
              <PaperItem
                key={paper.link}
                title={paper.title}
                link={paper.link}
                authors={paper.authors}
              />
            ))}
          </ul>
        </div>

        <div className="content-heading">
          Papers for &nbsp;<InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> &nbsp;
          Datasets
        </div>
        <div className="content-note">
          Note: The datasets used in previous papers may be different, we unify
          the parameters (data shape, forward modelling, training, etc.) of
          official &nbsp;<InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> &nbsp;
          datasets.
        </div>
        <div className="content-text">
          <ul>
            <li style={{ marginBottom: "10px", fontFamily: "Georgia" }}>
              <div>
                <a
                  href="https://arxiv.org/abs/2306.12386"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InlineMath math={"\\mathbb{E}^{FWI}"} />
                  {
                    " Multi-parameter Benchmark Datasets for Elastic Full Waveform Inversion of Geophysical Properties"
                  }
                </a>
              </div>
              <div>
                Shihang Feng, Hanchen Wang, Chengyuan Deng, Yinan Feng, Yanhua
                Liu, Min Zhu, Peng Jin, Yinpeng Chen, and Youzuo Lin
              </div>
            </li>
          </ul>
          <ul style={{ fontFamily: "Georgia" }}>
            {papers_efwi.map((paper) => (
              <PaperItem
                key={paper.link}
                title={paper.title}
                link={paper.link}
                authors={paper.authors}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
