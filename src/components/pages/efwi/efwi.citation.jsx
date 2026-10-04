import { InlineMath } from "../../Math";
import { CodeBlock } from "../../common";

const BIBTEX = `@misc{feng2023mathbfmathbbefwi,
  title         = {\${\\mathbf{\\mathbb{E}^{FWI}}}$: Multi-parameter Benchmark Datasets for Elastic Full Waveform Inversion of Geophysical Properties},
  author        = {Shihang Feng and Hanchen Wang and Chengyuan Deng and Yinan Feng and Yanhua Liu and Min Zhu and Peng Jin and Yinpeng Chen and Youzuo Lin},
  year          = {2023},
  eprint        = {2306.12386},
  archivePrefix = {arXiv},
  primaryClass  = {physics.geo-ph}
}`;

export default function EFWICitation() {
  return (
    <section className="section section--soft section--tight" id="citation">
      <div className="container container--narrow">
        <h2 style={{ fontSize: "1.35rem" }}>Citation</h2>
        <p style={{ margin: "8px 0 0", color: "var(--ink-2)" }}>
          If you use the <InlineMath math={"\\mathbb{E}^{FWI}"} /> datasets in your work, please cite{" "}
          <a href="https://arxiv.org/abs/2306.12386" target="_blank" rel="noopener noreferrer">
            our paper
          </a>
          :
        </p>
        <CodeBlock code={BIBTEX} label="Copy BibTeX" />
      </div>
    </section>
  );
}
