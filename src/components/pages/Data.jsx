import { Link } from "react-router";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Button } from "../Button";
import { MathText, PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { asset, isExternal } from "../../utils/asset";
import { datasets } from "../../data/datasets";
import "./Data.css";

// Data page: the lab's open datasets, each pointing to its project page.
// All content lives in src/data/datasets.js.
export default function Data() {
  useDocumentTitle("Data");
  return (
    <>
      <PageHeader eyebrow="Data" title="Open datasets">
        Large-scale benchmark datasets from the OmniWave Lab for machine learning in computational wave imaging, from
        seismic full waveform inversion to ultrasound computed tomography. Each project page has the downloads,
        benchmark results and citation.
      </PageHeader>

      <section className="section">
        <div className="container">
          <ul className="data-list">
            {datasets.map((d) => (
              <li key={d.key} className="data-item" id={d.key}>
                <Link to={d.path} className="data-media" tabIndex={-1} aria-hidden="true">
                  <img src={asset(d.image)} alt="" loading="lazy" />
                </Link>
                <div className="data-body">
                  <div className="data-meta">
                    <span className="badge">{d.venue}</span>
                    <span className="data-area">{d.area}</span>
                  </div>
                  <h2>
                    <Link to={d.path}>
                      <MathText>{d.name}</MathText>
                    </Link>
                  </h2>
                  <p className="data-summary">{d.summary}</p>
                  <dl className="data-facts">
                    {d.facts.map((f) => (
                      <div key={f.label}>
                        <dt>{f.label}</dt>
                        <dd>{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="btn-row">
                    <Button to={d.path} size="sm">
                      Project page <FiArrowRight aria-hidden="true" />
                    </Button>
                    {d.links.map((l) => (
                      <Button key={l.label} to={l.to} href={l.href} variant="secondary" size="sm">
                        {l.label}
                        {isExternal(l.href) && <FiExternalLink aria-hidden="true" />}
                      </Button>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--soft section--tight">
        <div className="container container--narrow data-using">
          <h2>Using our data</h2>
          <p>
            If you use one of these datasets, please cite its paper; the BibTeX is at the bottom of each project page.
            For questions about the data, get in touch. To hear about new OpenFWI datasets and benchmark updates, join
            the mailing list.
          </p>
          <div className="btn-row">
            <Button to="/contact-us" variant="secondary">
              Contact us
            </Button>
            <Button href="https://groups.google.com/g/openfwi" variant="secondary">
              OpenFWI mailing list <FiExternalLink aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
