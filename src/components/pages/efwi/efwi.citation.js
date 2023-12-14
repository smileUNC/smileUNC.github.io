import React from "react";
import "../../Content.css";
import { InlineMath } from "react-katex";
export default function EFWICitation() {
  const bibtexEntry = `
    @misc{feng2023mathbfmathbbefwi,
      title={\${\\mathbf{\\mathbb{E}^{FWI}}\$: Multi-parameter Benchmark Datasets for Elastic Full Waveform Inversion of Geophysical Properties},
      author={Shihang Feng and Hanchen Wang and Chengyuan Deng and Yinan Feng and Yanhua Liu and Min Zhu and Peng Jin and Yinpeng Chen and Youzuo Lin},
      year={2023},
      eprint={2306.12386},
      archivePrefix={arXiv},
      primaryClass={physics.geo-ph}
    }
  `;
  return (
    <div>
      <div className="content-container">
        <div className="content-title">Citation</div>
        <div className="content-text">
          If you use <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> Datasets in
          your work, please cite{" "}
          <a
            href="https://arxiv.org/abs/2306.12386"
            target="_blank"
            rel="noopener noreferrer"
          >
            our paper
          </a>{" "}
          (Bibtex below).
          <div className="citation-code">
            <pre>
              <code style={{ fontFamily: "Geogia" }}>{bibtexEntry}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
