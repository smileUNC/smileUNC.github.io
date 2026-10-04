import { CodeBlock } from "../../common";
import { citation } from "../../../data/openfwi";

export default function OpenFWICitation() {
  return (
    <section className="section section--soft section--tight" id="citation">
      <div className="container container--narrow">
        <h2 style={{ fontSize: "1.35rem" }}>Citation</h2>
        <p style={{ margin: "8px 0 0", color: "var(--ink-2)" }}>
          If you use the OpenFWI datasets in your work, please cite{" "}
          <a href={citation.paper} target="_blank" rel="noopener noreferrer">
            our paper
          </a>
          :
        </p>
        <CodeBlock code={citation.bibtex} label="Copy BibTeX" />
      </div>
    </section>
  );
}
