import React from "react";
import "../../Content.css";
export default function OpenFWICitation() {
  const bibtexEntry = `
    @inproceedings{NEURIPS2022_27d3ef26,
      author = {Deng, Chengyuan and Feng, Shihang and Wang, Hanchen and Zhang, Xitong and Jin, Peng and Feng, Yinan and Zeng, Qili and Chen, Yinpeng and Lin, Youzuo},
      booktitle = {Advances in Neural Information Processing Systems},
      editor = {S. Koyejo and S. Mohamed and A. Agarwal and D. Belgrave and K. Cho and A. Oh},
      pages = {6007--6020},
      publisher = {Curran Associates, Inc.},
      title = {OpenFWI: Large-scale Multi-structural Benchmark Datasets for Full Waveform Inversion},
      url = {https://proceedings.neurips.cc/paper_files/paper/2022/file/27d3ef263c7cb8d542c4f9815a49b69b-Paper-Datasets_and_Benchmarks.pdf},
      volume = {35},
      year = {2022}
    }
  `;
  return (
    <div>
      <div className="content-container">
        <div className="content-title">Citation</div>
        <div className="content-text">
          If you use OpenFWI Datasets in your work, please cite{" "}
          <a
            href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/27d3ef263c7cb8d542c4f9815a49b69b-Abstract-Datasets_and_Benchmarks.html"
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
